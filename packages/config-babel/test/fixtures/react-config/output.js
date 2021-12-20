"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ahoj = void 0;
exports.App = App;
exports.default = exports.another = exports.Component = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

function App() {
  return (0, _jsxRuntime.jsx)("div", {
    children: "This is my app"
  });
}

const test = '';

var _totally = _classPrivateFieldLooseKey("totally");

class Ahoj {
  constructor() {
    Object.defineProperty(this, _totally, {
      writable: true,
      value: 'test'
    });
  }

  get Totally() {
    return _classPrivateFieldLooseBase(this, _totally)[_totally];
  }

}

exports.Ahoj = Ahoj;

const another = a => {
  return a ?? '';
};

exports.another = another;

const Component = () => {
  return (0, _jsxRuntime.jsx)("div", {
    children: "test"
  });
};

exports.Component = Component;
var _default = test;
exports.default = _default;
