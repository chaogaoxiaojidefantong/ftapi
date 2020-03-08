"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class NumberUtil {
  /**
   * 低于n位数不做处理，高于n位数保留n位数
   * @param data 
   * @param num 想要获取的位数
   */
  getPreciseNum(data, n) {
    let arr = data.toString().split(".");

    if (arr.length > 1) {
      let len = data.toString().split(".")[1].length; //数据长度

      if (len > n) {
        data = parseFloat(data.toFixed(n));
        return data;
      }
    }

    return data;
  }

}

var _default = new NumberUtil();

exports.default = _default;