function Person(name) {
  this.name = name
}
Person.prototype.say = function() {
  console.log(`Hi, I'm ${this.name}`)
}

function newObject(Constructor, ...args) {
  const o = Object.create(null)
  Object.setPrototypeOf(o, Constructor.prototype)
  const object = Constructor.call(o, ...args)
  return typeof object === 'object' ? object : o
}

const p = new Person('xpzheng')
p.say() // Hi, I'm xpzheng

const p2 = newObject(Person, 'xpzheng')
p2.say() // Hi, I'm xpzheng
