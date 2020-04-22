
/**
 * 等待媒体对象加载完成
 * 可选参数finalState表示希望媒体加载到什么程度(仅加载完元信息/加载第一帧/加载至少两帧/加载很多帧以至于能播放到底)
 * 
 * @param {Object} media 媒体对象
 * @param {Function} callback 回调
 * @param {Number} finalState 期望达到的最终状态(1/2/3/4)
 */
function waitMediaLoaded(media, callback, finalState) {
    if (typeof media !== 'object' || !media instanceof HTMLMediaElement) {
        throw new TypeError('media必须是媒体对象');
    }
    if (typeof finalState !== 'number' || Number.isNaN(finalState)) {
        finalState = 1;
    }

    if (media.readyState >= finalState) {
        if (callback) {
            callback.call(media);
        }
    } else {
        var eventType = 'loadedmetadata';
        if (finalState == 2) {
            eventType = 'loadeddata';
        } else if (finalState == 3) {
            eventType = 'canplay';
        } else if (finalState == 4) {
            eventType = 'canplaythrough';
        }
        media.addEventListener(eventType, callback, false)
    }
}