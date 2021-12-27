"use strict";

exports.__esModule = true;
exports.Ahoj = void 0;
exports.App = App;
exports.default = exports.another = exports.Component = void 0;

var _jsxRuntime = require("react/jsx-runtime");

function App() {
  return (0, _jsxRuntime.jsx)("div", {
    children: "This is my app"
  });
}

const test = '';

class Ahoj {
  #totally = 'test';

  get Totally() {
    return this.#totally;
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
