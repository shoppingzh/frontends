(function(ui, $) {

  ui.extend({
    name: 'editor',
    config: {
      id: null,
      toolbarReverse: false
    },
    callback: function(config) {

      var that = this;
      var editor;
      
      that.init = function(options) {
        var opts = $.extend(true, {}, config, options);
        var $ui = bui.$(opts.id);

        var $editor = $ui.find('textarea');
        var editorId = ui.guid();
        if (!$editor.length) {
          $editor = $('<textarea>').attr('id', editorId).appendTo($ui);
        }

        tinymce.init({
          target: $editor[0],
          height: opts.height,
          mobile: {
            plugins: 'image media',
            menubar: false,
            toolbar: 'undo redo bold underline image media'
          },
          toolbar_location: opts.toolbarReverse ? 'bottom' : 'top',
          statusbar: false,
          setup: function(editor) {
            editor.on('focus', function(e) {
            })
          }
        }).then(function(editors) {
          editor = editors[0];
          if (opts.onInited) {
            opts.onInited(editor);
          }
        })
        
        return that;
      }

      that.getContent = function(plain) {
        if (!editor) {
          return '';
        }
        return editor.getContent({ format: plain ? 'text' : 'html'});
      }

      that.setContent = function(content) {
        editor && editor.setContent(content)
      }

      return that.init();
    },

    beforeDestroy: function() {

    }
  })

})(bui, window.libs);