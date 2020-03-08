"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../../style/form/FtLoginForm.less");

var _FtConfig = _interopRequireDefault(require("../../config/FtConfig"));

var _FtInput = _interopRequireDefault(require("./FtInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;

class LoginForm extends _react.Component {
  state = {
    styles: {},
    val1: '',
    val2: ''
  };

  constructor(props) {
    super(props);
    this.inputElement = _react.default.createRef();
    LoginForm.displayName = 'oginform';
  }

  static defaultProps = {
    width: '250px',
    height: '30px'
  };

  handleChage(data, event) {
    let eventValue = event.target.value;

    if (data == 'val1') {
      this.setState(_objectSpread({}, this.state, {}, {
        val1: eventValue
      }));
    } else if (data = 'val2') {
      this.setState(_objectSpread({}, this.state, {}, {
        val2: eventValue
      }));
    }
  }

  componentWillReceiveProps() {}

  componentDidUpdate() {}

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    let styles = this.state.styles;
    styles = _objectSpread({}, styles, {}, {
      width: this.props.width,
      height: this.props.height
    });

    let state = _objectSpread({}, this.state, {}, {
      styles: styles
    });

    this.setState(state);
    this.inputElement.current.focus();
  }

  submit() {
    let obj = {
      email: this.state.val1,
      pwd: this.state.val2
    };
    this.props.submit(obj);
  }

  handleFtChange(value) {
    this.setState(_objectSpread({}, this.state, {}, {
      val1: value
    }));
  }

  render() {
    return _react.default.createElement("div", {
      className: _FtConfig.default.cssPrefix + 'login-form'
    }, _react.default.createElement(_FtInput.default, {
      onInputChange: this.handleFtChange.bind(this),
      value: this.state.val1,
      inputRef: this.inputElement
    }), _react.default.createElement("input", {
      type: "password",
      className: _FtConfig.default.cssPrefix + 'input',
      style: this.state.styles,
      onChange: this.handleChage.bind(this, 'val2')
    }), _react.default.createElement("button", {
      onClick: this.submit.bind(this)
    }, "tijiao"));
  }

}

var _default = LoginForm;
exports.default = _default;