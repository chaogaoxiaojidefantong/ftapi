"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringUtil = _interopRequireDefault(require("./stringUtil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ObjUtil {
  //验证对象里的字符串是否有空值,true为有，false为没有
  verifyObj(obj) {
    let state = false;
    Object.keys(obj).forEach(key => {
      if (!obj[key].replace(/\s+/g, "")) {
        state = true;
        return;
      }
    });
    return state;
  }
  /**
   * 删除对象里的空值或者空字符串
   * @param obj 
   */


  deleteNull(obj) {
    let res = {};
    Object.keys(obj).forEach(item => {
      let val = obj[item];

      if (val != null && val != undefined && _stringUtil.default.removeSpace(val + '')) {
        res[item] = val;
      }
    });
    return res;
  }
  /**
   * 将对象里的值全部清为空字符串
   * @param obj 
   */


  clearObj(obj) {
    let res = {};
    Object.keys(obj).forEach(item => {
      res[item] = '';
    });
    return res;
  }

}

var _default = ObjUtil;
exports.default = _default;