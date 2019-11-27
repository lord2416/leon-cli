"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.set = exports.get = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _util = require("util");

var _path = require("./path");

var _log = require("./log");

var _resource = require("./resource");

var _regeneratorRuntime2 = require("regenerator-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var exists = (0, _util.promisify)(_fs["default"].exists);
var readFile = (0, _util.promisify)(_fs["default"].readFile);
var writeFile = (0, _util.promisify)(_fs["default"].writeFile);

var get =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(key) {
    var _ref2, template;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _resource.readRCFile)();

          case 2:
            _ref2 = _context.sent;
            template = _ref2.template;

            if (key) {
              if (template[key]) {
                _log.log.normal(template[key]);
              } else {
                _log.log.error("template <".concat(key, "> not exists!"));
              }
            } else {
              _log.log.normal((0, _resource.encode)(template));
            }

          case 5:
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

var set =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(key, value) {
    var _ref4, template, others, options;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (key) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", _log.log.error('<key> is required!'));

          case 2:
            if (value) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", _log.log.error('<value> is required!'));

          case 4:
            _context2.next = 6;
            return (0, _resource.readRCFile)();

          case 6:
            _ref4 = _context2.sent;
            template = _ref4.template;
            others = (0, _objectWithoutProperties2["default"])(_ref4, ["template"]);
            options = _objectSpread({}, others, {
              template: _objectSpread({}, template, (0, _defineProperty2["default"])({}, key, value))
            });
            _context2.next = 12;
            return writeFile(_path.leonrc, (0, _resource.encode)(options), 'utf8');

          case 12:
            _log.log.success("template <".concat(key, ">: \"").concat(value, "\" is added!"));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function set(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.set = set;

var remove =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(key) {
    var _ref6, prevTemp, others, template, options;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (key) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", _log.log.error('<key> is required!'));

          case 2:
            _context3.next = 4;
            return (0, _resource.readRCFile)();

          case 4:
            _ref6 = _context3.sent;
            prevTemp = _ref6.template;
            others = (0, _objectWithoutProperties2["default"])(_ref6, ["template"]);

            if (prevTemp[key]) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", _log.log.error("template <".concat(key, "> not exists!")));

          case 9:
            template = Object.keys(prevTemp).reduce(function (acc, cur) {
              if (cur !== key) {
                acc[cur] = prevTemp[cur];
              }

              return acc;
            }, {});
            options = _objectSpread({}, others, {
              template: template
            });
            _context3.next = 13;
            return writeFile(_path.leonrc, (0, _resource.encode)(options), 'utf8');

          case 13:
            _log.log.success("template <".concat(key, ">: \"").concat(prevTemp[key], "\" is deleted!"));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function remove(_x4) {
    return _ref5.apply(this, arguments);
  };
}();

exports.remove = remove;