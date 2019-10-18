"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));

var _resource = require("./resource");

var _dns = require("dns");

var download =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(url, directoryPath) {
    var config;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _resource.getAll)();

          case 2:
            config = _context.sent;
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _downloadGitRepo["default"])(url, directoryPath, function (err) {
                if (err) {
                  reject(err);
                }

                resolve();
              });
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function download(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = download;
exports["default"] = _default;