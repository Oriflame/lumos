"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Ahoj = void 0;
exports.App = App;
exports.default = exports.another = exports.Component = void 0;

var _classPrivateFieldLooseBase2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldLooseBase"));

var _classPrivateFieldLooseKey2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldLooseKey"));

var _jsxRuntime = require("react/jsx-runtime");

function App() {
  return (0, _jsxRuntime.jsx)("div", {
    children: "This is my app"
  });
}

const test = '';

var _totally = (0, _classPrivateFieldLooseKey2.default)("totally");

class Ahoj {
  constructor() {
    Object.defineProperty(this, _totally, {
      writable: true,
      value: 'test'
    });
  }

  get Totally() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _totally)[_totally];
  }

}

exports.Ahoj = Ahoj;

const another = a => {
  return a != null ? a : '';
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
