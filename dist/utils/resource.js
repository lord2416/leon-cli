"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeRegistry = exports.ls = exports.readRCFile = exports.decode = exports.encode = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _util = require("util");

var _constants = require("../constants");

var _path = require("./path");

var _log = require("./log");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var exists = (0, _util.promisify)(_fs["default"].exists);
var readFile = (0, _util.promisify)(_fs["default"].readFile);
var writeFile = (0, _util.promisify)(_fs["default"].writeFile);

var encode = function encode() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return JSON.stringify(opt, null, '\t');
};

exports.encode = encode;

var decode = function decode(str) {
  return JSON.parse(str);
};

exports.decode = decode;

var readRCFile =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(key) {
    var flag, buf, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return exists(_path.leonrc);

          case 2:
            flag = _context.sent;

            if (flag) {
              _context.next = 6;
              break;
            }

            _context.next = 6;
            return writeFile(_path.leonrc, encode(_objectSpread({}, _constants.SETTING)), 'utf8');

          case 6:
            _context.next = 8;
            return readFile(_path.leonrc, 'utf8');

          case 8:
            buf = _context.sent;
            data = decode(buf);
            return _context.abrupt("return", key ? data[key] : data);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function readRCFile(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.readRCFile = readRCFile;

var ls =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var _ref3, template, registry, tmpList;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return readRCFile();

          case 2:
            _ref3 = _context2.sent;
            template = _ref3.template;
            registry = _ref3.registry;
            tmpList = Object.keys(template).map(function (key) {
              return {
                key: key,
                value: template[key]
              };
            });

            if (tmpList.length > 0) {
              tmpList.forEach(function (_ref4) {
                var key = _ref4.key,
                    value = _ref4.value;

                if (key === registry) {
                  _log.log.green("  * ".concat(key, ": ").concat(value));
                } else {
                  _log.log.normal("    ".concat(key, ": ").concat(value));
                }
              });
            } else {
              _log.log.redBold("    Please add a custom template first!");
            }

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function ls() {
    return _ref2.apply(this, arguments);
  };
}();

exports.ls = ls;

var changeRegistry =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(key) {
    var _ref6, registry, template, others, options;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (key) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", _log.log.error('Template <key> is required'));

          case 2:
            _context3.next = 4;
            return readRCFile();

          case 4:
            _ref6 = _context3.sent;
            registry = _ref6.registry;
            template = _ref6.template;
            others = (0, _objectWithoutProperties2["default"])(_ref6, ["registry", "template"]);

            if (!template[key]) {
              _context3.next = 15;
              break;
            }

            options = _objectSpread({}, others, {
              template: template,
              registry: key
            });
            _context3.next = 12;
            return writeFile(_path.leonrc, encode(options), 'utf8');

          case 12:
            _log.log.green("    Now using template <".concat(key, ">: \"").concat(template[key], "\""));

            _context3.next = 16;
            break;

          case 15:
            _log.log.error("template <".concat(key, "> not exists, please add first!"));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function changeRegistry(_x2) {
    return _ref5.apply(this, arguments);
  };
}();

exports.changeRegistry = changeRegistry;