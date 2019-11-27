"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _operates2 = require("../../utils/operates");

var _resource = require("../../utils/resource");

var _constants = require("../../constants");

var _operates;

var operates = (_operates = {}, (0, _defineProperty2["default"])(_operates, _constants.ACTIONMAP.GET.NAME, function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(args) {
    var _args, key;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _args = (0, _slicedToArray2["default"])(args, 1), key = _args[0];

            if (!key) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return (0, _operates2.get)(key);

          case 4:
            _context.next = 8;
            break;

          case 6:
            _context.next = 8;
            return (0, _resource.ls)();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()), (0, _defineProperty2["default"])(_operates, _constants.ACTIONMAP.SET.NAME, function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(args) {
    var _args3, key, value;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _args3 = (0, _slicedToArray2["default"])(args, 2), key = _args3[0], value = _args3[1];
            _context2.next = 3;
            return (0, _operates2.set)(key, value);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}()), (0, _defineProperty2["default"])(_operates, _constants.ACTIONMAP.REMOVE.NAME, function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(args) {
    var _args5, key;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _args5 = (0, _slicedToArray2["default"])(args, 1), key = _args5[0];
            _context3.next = 3;
            return (0, _operates2.remove)(key);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}()), _operates);
var _default = operates;
exports["default"] = _default;