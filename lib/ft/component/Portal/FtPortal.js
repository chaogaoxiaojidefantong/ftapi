"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./FtPortal.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const modalRoot = document.getElementById('modal-root');

class FtPortal extends _react.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('h1');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return _reactDom.default.createPortal(this.props.children, this.el);
  }

}

var _default = FtPortal;
exports.default = _default;