"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ahoj = void 0;
exports.App = App;
exports.default = exports.another = exports.Component = void 0;

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _jsxRuntime = require("react/jsx-runtime");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function App() {
  return (0, _jsxRuntime.jsx)("div", {
    children: "This is my app"
  });
}

const test = '';

var _totally = new WeakMap();

class Ahoj {
  constructor() {
    _classPrivateFieldInitSpec(this, _totally, {
      writable: true,
      value: 'test'
    });
  }

  get Totally() {
    return (0, _classPrivateFieldGet2.default)(this, _totally);
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
