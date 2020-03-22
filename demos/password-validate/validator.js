/**
 * 检查某个字符从在标准模式下是否出现了N次
 * @param {String} str 待匹配字符串
 * @param {String} pattern  标准模式
 * @param {Number} minCount 最低连续次数
 * @param {Boolean} ignoreCase 是否忽略大小写
 * @param {Boolean} reverse 是否忽略正反序
 */
function isSerial(str, pattern, minCount, ignoreCase, reverse) {
  if (ignoreCase) {
    str = str.toLowerCase();
    pattern = pattern.toLowerCase();
  }
  var serial = false;
  for (var i = 0, len = str.length; i < len; i++) {
    var c = str[i];
    var idx = pattern.indexOf(c);
    if (idx < 0) {
      // 没有找到
      continue;
    }
    // 待匹配字符串后续字符都不够连续出现最低次数，直接结束
    if (i > len - minCount) {
      break;
    }
    // 找到匹配的第一字符，连续向后(或向前)匹配minCount-1次，如果都匹配则说明找到了
    var count = 1, reverseCount = 1;
    for (var j = 1; j < minCount; j++) {
      var m = str[i + j], n = pattern[idx + j], rn = pattern[idx - j];
      // 这里不是必须break，但是为了性能，当前后都没找到时，肯定不满足，直接退出循环
      if (m !== n && (reverse && m !== rn)) {
        break;
      }
      if (m === n) {
        count++;
      }
      if (m === rn) {
        reverseCount++;
      }
    }
    if (count >= minCount || (reverse && reverseCount >= minCount)) {
      serial = true;
      break;
    }
  }

  return serial;
}