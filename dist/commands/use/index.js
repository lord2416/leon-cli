"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _resource = require("../../utils/resource");

var _log = require("../../utils/log");

var use =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(args) {
    var _args, key;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _args = (0, _slicedToArray2["default"])(args, 1), key = _args[0];

            if (key) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", _log.log.error('template <key> is required'));

          case 3:
            _context.next = 5;
            return (0, _resource.changeRegistry)(key);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function use(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = use;
exports["default"] = _default;