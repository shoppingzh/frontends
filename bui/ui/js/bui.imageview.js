(function (ui, $) {

  ui.extend({
    name: 'imageview',
    config: {

    },
    callback: function (config) {
      var that = this;

      that.init = function (options) {
        var opts = $.extend(true, {}, config, options);

        var uiDialog = bui.dialog({ render: true }).create({
          title: null,
          buttons: null,
          content: template(opts),
          fullscreen: true
        });

        uiDialog.selector().on('click', function() {
          uiDialog.close()
        })

        uiDialog.open();

        return that;
      }

      function template(opts) {
        var h = `
          <div class="bui-imageview" style="height: 100%">
            <div class="bui-imageview-main">
              <div class="bui-imageview-inner">
                <img class="image" src="${opts.src}">
              </div>
            </div>
            <div class="bui-imageview-foot">
              hello
            </div>
          </div>
        `;

        return h;
      }


      return that.init();

    }
  })


})(bui, window.libs);