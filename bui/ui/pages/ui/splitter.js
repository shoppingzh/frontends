loader.define(function(require,exports,module){

    var pageview = {};


    var uiDialog = bui.dialog({
        id: "#uiDialog",
        position: 'bottom',
        effect: 'fadeInUp',
        height: '45%'
    });

    uiDialog.open()

    var widgets = uiDialog.widget()
    console.log(widgets)

    widgets.mask.destroy()

    return pageview;
})