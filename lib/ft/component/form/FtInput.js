"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../../style/form/FtInput.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const WrappedComponent = _react.default.forwardRef((props, ref) => {
  return null;
});

class FtInput extends _react.Component {
  state = {
    styles: {},
    value: ''
  };

  handleChage(event) {
    this.props.onInputChange(event.target.value);
  }

  shouldComponentUpdate() {
    //return false;componentDidUpdate不会执行
    return true;
  }

  componentDidUpdate() {}

  componentDidMount() {
    let styles = this.state.styles;

    if (this.props.width) {
      styles = _objectSpread({}, styles, {}, {
        width: this.props.width
      });

      let state = _objectSpread({}, this.state, {}, {
        styles: styles
      });

      this.setState(state);
    }

    if (this.props.height) {
      styles = _objectSpread({}, styles, {}, {
        height: this.props.height
      });

      let state = _objectSpread({}, this.state, {}, {
        styles: styles
      });

      this.setState(state);
    }
  }

  render() {
    return _react.default.createElement("div", {
      className: "FtInput"
    }, _react.default.createElement("input", {
      type: "text",
      onChange: this.handleChage.bind(this),
      value: this.props.value,
      style: this.state.styles,
      ref: this.props.inputRef
    }));
  }

}

var _default = FtInput;
exports.default = _default;