/**
 * 解析URL参数
 * @param {String} url 
 * @returns {Object} 参数对象，key为参数名，value为参数值
 */
function parseParam(url){
    if(!url){
        return null;
    }
    var parts = url.split('?');
    if(parts.length <= 1){
        return null;
    }
    var queryPart = parts[1];
    var paramParts = queryPart.split('&');
    if(paramParts.length < 1){
        return null;
    }
    var param = {};
    paramParts.forEach(function(paramPart, index){
        var pParts = paramPart.split('=');
        if(pParts[0]){
            param[pParts[0]] = pParts[1];
        }
        
    });
    console.log(param);
    return param;
}

/**
 * URL拼接
 * 1. 拼接的两侧如果都没有左斜线会自动补充
 * 2. 自动去除多余的左斜线和问号
 * @param {String} left path
 * @param {String} right other
 */
function urlAppend(left, right){
    var hasSlash = /\/$/.test(left) || /^\//.test(right);
    var full = `${left}${!hasSlash ? '/' : ''}${right}`;
    return full.replace(/(?<!https?:)(\/)\1+/g, '$1').replace(/(\?)\1+/g, '$1');
}