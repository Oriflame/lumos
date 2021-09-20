"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.App = App;
exports.default = exports.Component = exports.another = exports.Ahoj = void 0;

var _classPrivateFieldLooseBase2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldLooseBase"));

var _classPrivateFieldLooseKey2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldLooseKey"));

var _react = _interopRequireDefault(require("react"));

function App() {
  return <div>This is my app</div>;
}

const test = '';

var _totally = /*#__PURE__*/(0, _classPrivateFieldLooseKey2.default)("totally");

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
  return <div>test</div>;
};

exports.Component = Component;
var _default = test;
exports.default = _default;
