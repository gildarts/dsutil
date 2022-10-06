/**
 * 解決 sax 元件的 bug，無法在 browser 運作問題。
 */
export const Stream = function () { };

/** sax 的 bug 程式碼。 */
// var Stream
// try {
//   Stream = require('stream').Stream // 這行有問題
// } catch (ex) {
//   Stream = function () {}
// }
