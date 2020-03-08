"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class SystemUtil {
  isMobile() {
    const ua = navigator.userAgent.toLowerCase();
    const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);
    return isMobile;
  }
  /**
   * 
   * @param a 转义html脚本 < > & " '
   */


  escapeHTML(a) {
    a = "" + a;
    return a.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, "").replace(/'/g, "'");
  }

}

var _default = new SystemUtil();

exports.default = _default;