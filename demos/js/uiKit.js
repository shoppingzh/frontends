define(function() {
    'use strict'

    function getMainColor(imageUrl, callback){
        var img = new Image();
        img.src = imageUrl;

        img.onload = function(){
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var width = img.width, height = img.height;
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            
            // 获取图片的所有像素和各颜色像素出现的次数
            var data = ctx.getImageData(0, 0, width, height).data;
            var colorMap = {};
            for(var i = 0; i < data.length; i += 4){
                var r = data[i],
                    g = data[i + 1],
                    b = data[i + 2],
                    a = data[i + 3];
                var key = `${r},${g},${b},${a}`;
                var count = colorMap[key] || 0;
                colorMap[key] = ++count;
            }

            var mainColor;
            var maxCount = 0;
            Object.keys(colorMap).forEach(function(key){
                var count = colorMap[key];
                if(count >= maxCount){
                    mainColor = key;
                    maxCount = count;
                }
            })

            var arr = mainColor.split(/,/g);
            callback && callback({
                r: parseInt(arr[0]),
                g: parseInt(arr[1]),
                b: parseInt(arr[2]),
                a: parseInt(arr[3])
            });
        }
    }


    return {
        getMainColor: getMainColor
    }

});