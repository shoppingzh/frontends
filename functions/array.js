/**
 * 判断对象是否为数组
 * @param {Any} obj 对象
 */
function isArrayAnyway(obj) {
	if (Array.isArray) {
		return Array.isArray(obj);
	}
	return Object.prototype.toString.call(obj).toLowerCase() === '[object array]';
}