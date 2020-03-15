loader.define(function(require,exports,module){

    var pageview = {};

    var uiDialog = bui.dialog({
        id: "#uiDialog",
        height: '45%',
        position: 'bottom',
        effect: 'fadeInUp'
    });

    uiDialog.on('open', function() {
        // var $dialog = uiDialog.selector();
        // $dialog.find('.tox-editor-header')[0].scrollIntoView()
        // console.log($dialog)
        // tinymce.activeEditor.execCommand('mceFullScreen');
    })

    router.$(".bui-page").on('click', '#editBtn', function() {
        uiDialog.open()
    })

    var editor = bui.editor({
        id: '#editor',
        height: '100%',
        toolbarReverse: true
    })

    var editor2 = bui.editor({
        id: '#editor2',
        height: 400
    })

    router.$(".bui-page").on('click', '#viewBtn', function() {
        console.log('editor1: ')
        console.log(editor.getContent())
        console.log('editor2: ')
        console.log(editor2.getContent())
    })

    return pageview;
})