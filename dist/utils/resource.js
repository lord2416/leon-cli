"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.set = exports.getAll = exports.get = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _util = require("util");

var _ini = require("ini");

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var exits = (0, _util.promisify)(_fs["default"].exists);
var readFile = (0, _util.promisify)(_fs["default"].readFile);
var writeFile = (0, _util.promisify)(_fs["default"].writeFile);
var leonrc = "".concat(_constants.BASE, "/.leonrc");

var get =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(key) {
    var exit, buf, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return exits(leonrc);

          case 2:
            exit = _context.sent;

            if (!exit) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return readFile(leonrc, 'utf8');

          case 6:
            buf = _context.sent;
            data = (0, _ini.decode)(buf);
            return _context.abrupt("return", data[key] || "".concat(key, " not exists"));

          case 9:
            return _context.abrupt("return", _constants.SETTING[key] || "".concat(key, " not exists"));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function get(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.get = get;

var getAll =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var exit, buf, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return exits(leonrc);

          case 2:
            exit = _context2.sent;

            if (!exit) {
              _context2.next = 9;
              break;
            }

            _context2.next = 6;
            return readFile(leonrc, 'utf8');

          case 6:
            buf = _context2.sent;
            data = (0, _ini.decode)(buf);
            return _context2.abrupt("return", data);

          case 9:
            return _context2.abrupt("return", _constants.SETTING);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAll() {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAll = getAll;

var set =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(key, value) {
    var exit, options, buf, data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (key) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", console.log((0, _constants.red)((0, _constants.bold)('Error:')), (0, _constants.red)('<key> is required')));

          case 2:
            if (value) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt("return", console.log((0, _constants.red)((0, _constants.bold)('Error:')), (0, _constants.red)('<value> is required')));

          case 4:
            _context3.next = 6;
            return exits(leonrc);

          case 6:
            exit = _context3.sent;

            if (!exit) {
              _context3.next = 15;
              break;
            }

            _context3.next = 10;
            return readFile(leonrc, 'utf8');

          case 10:
            buf = _context3.sent;
            data = (0, _ini.decode)(buf);
            options = _objectSpread({}, data, (0, _defineProperty2["default"])({}, key, value));
            _context3.next = 16;
            break;

          case 15:
            options = _objectSpread({}, _constants.SETTING, (0, _defineProperty2["default"])({}, key, value));

          case 16:
            _context3.next = 18;
            return writeFile(leonrc, (0, _ini.encode)(options), 'utf8');

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function set(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.set = set;

var remove =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(key) {
    var exit, buf, _decode, k, others;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return exits(leonrc);

          case 2:
            exit = _context4.sent;

            if (!exit) {
              _context4.next = 10;
              break;
            }

            _context4.next = 6;
            return readFile(leonrc, 'utf8');

          case 6:
            buf = _context4.sent;
            _decode = (0, _ini.decode)(buf), k = _decode.key, others = (0, _objectWithoutProperties2["default"])(_decode, ["key"]);
            _context4.next = 10;
            return writeFile(leonrc, (0, _ini.encode)(others), 'utf8');

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function remove(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.remove = remove;