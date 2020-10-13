(function() {

  function findTextNode(el, callback) {
    if (el.nodeType === 3 && el.nodeValue.trim()) {
      return callback && callback(el)
    }
    el.childNodes.forEach(node => {
      findTextNode(node, callback)
    })
  }


  class MyVue {

    constructor(options) {
      this.options = options
      this.init()
      return new Proxy(this, {
        set(target, property, newVal, receiver) {
          if (property in target.data) {
            const handlers = target.watch[property]
            if (handlers && handlers.length) {
              handlers.forEach(handler => {
                handler(newVal)
              })
            }
          }
        }
      })
    }

    init() {
      this.$el = this.options.el
      this.data = this.options.data
      this.watch = {}

      // 获取文本节点，解析出变量表达式，将依赖收集起来
      findTextNode(this.$el, (node) => {
        const exp = new RegExp('{{\\s*(\\w+)\\s*}}', 'gi')
        const result = exp.exec(node.nodeValue)
        const property = result[1]
        if (property) {
          this.addWatch(property, function(newVal) {
            node.nodeValue = newVal
          })
        }
      })
    }

    addWatch(property, handler) {
      let handlers = this.watch[property]
      if (!handlers) {
        handlers = []
        this.watch[property] = handlers
      }
      if (handler && typeof handler === 'function') {
        handlers.push(handler)
      }
    }

  }

  window.MyVue = MyVue


})();