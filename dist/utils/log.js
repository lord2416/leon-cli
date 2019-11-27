"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = exports.bold = exports.red = exports.green = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

var _logSymbols = _interopRequireDefault(require("log-symbols"));

var compose = function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (a, b) {
    return function (args) {
      return a(b(args));
    };
  });
};

var _green = function green(t) {
  return _chalk["default"].green(t);
};

exports.green = _green;

var _red = function red(t) {
  return _chalk["default"].red(t);
};

exports.red = _red;

var bold = function bold(t) {
  return _chalk["default"].bold(t);
};

exports.bold = bold;
var log = {
  error: function error(t) {
    var fn = compose(_red, bold);
    console.log(fn("  Error: ".concat(t)));
  },
  success: function success(t) {
    var fn = compose(_green, bold);
    console.log(fn("  Success: ".concat(t)));
  },
  symbolSuccess: function symbolSuccess(t) {
    console.log(_logSymbols["default"].success, _green(t));
  },
  symbolError: function symbolError(t) {
    console.log(_logSymbols["default"].error, _red(t));
  },
  normal: function normal(t) {
    console.log(t);
  },
  green: function green(t) {
    console.log(_green(t));
  },
  greenBold: function greenBold(t) {
    var fn = compose(_green, bold);
    console.log(fn(t));
  },
  red: function red(t) {
    console.log(_red(t));
  },
  redBold: function redBold(t) {
    var fn = compose(_red, bold);
    console.log(fn(t));
  },
  space: function space() {
    console.log();
  }
};
exports.log = log;