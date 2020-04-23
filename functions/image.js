/**
 * 等待图片加载完成(方案1)
 * 
 * @param {Object} image 图片对象
 * @param {Function} callback 回调
 */
function waitImageLoaded(image, callback) {
    if (typeof image !== 'object') {
        throw new TypeError('请正确传入图片对象');
    }
    var complete = image.complete;
    if (complete) {
        if (typeof callback === 'function') {
            callback.call(image);
        }
    } else {
        if (typeof callback === 'function') {
            image.addEventListener('load', callback, false);
        }
    }
}

/**
 * 等待图片加载完成(方案2)
 * 由于每次对Image对象设置src属性都会触发浏览器发起HTTP请求，因此该方法可能存在请求量倍增的问题
 * 如果浏览器使用了图片的本地缓存，则可以有效减轻请求倍增的问题；但如果图片失败，换言之浏览器中没有
 * 对于图片的本地缓存，则<img>标签会触发一次网络请求，Image.src也会触发一次网络请求。
 * 浏览器在取用图片本地缓存时，会优先使用内存缓存，如果内存缓存不存在，则取用磁盘缓存，如果磁盘缓存仍然
 * 不存在，则发起HTTP请求。需要注意的是，服务器并不一定会返回304(Not Modified)响应码，这取决于服务器
 * 的缓存策略，有可能是按照过期时间计算，也有可能是按照ETag值计算是否返回304，甚至可能一律返回200(即返回
 * 图片数据，304状态的响应包很小，不返回图片数据)。
 * 
 * @param {Object} img 图片对象或图片地址
 * @param {Function} success 成功回调
 * @param {Function} failure 失败回调
 */
function waitImageLoaded2(img, success, failure) {
    if (typeof img !== 'object' && typeof img !== 'string') {
        throw new TypeError('请正确传入图片对象或图片地址');
    }
    var src = typeof img === 'object' ? img.src : img;
    var image = new Image();
    image.onload = function() {
        callFunc(success);
    }
    image.onerror = function() {
        callFunc(failure);
    }
    image.src = src;

    function callFunc(func) {
        if (typeof func === 'function') {
            func.call(img);
        }
    }
}