"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));

var _ora = _interopRequireDefault(require("ora"));

var _resource = require("./resource");

var _log = require("./log");

var downloadFromRepository =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(url, directoryPath) {
    var opts,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 2 && _args[2] !== undefined ? _args[2] : {
              clone: false
            };
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _downloadGitRepo["default"])(url, directoryPath, opts, function (err) {
                if (err) {
                  reject(err);
                }

                resolve();
              });
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function downloadFromRepository(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var downloadSourceToDirectory =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(directory) {
    var _ref3, registry, template, url, spinner;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _resource.readRCFile)();

          case 2:
            _ref3 = _context2.sent;
            registry = _ref3.registry;
            template = _ref3.template;

            if (registry) {
              _context2.next = 8;
              break;
            }

            _log.log.error("registry not exists, please use \"leon use <template-name>\" to set registry first!");

            return _context2.abrupt("return", {
              success: false
            });

          case 8:
            url = template[registry];

            if (url) {
              _context2.next = 12;
              break;
            }

            _log.log.error("template <".concat(registry, ">: \"").concat(url, "\" is not correct!"));

            return _context2.abrupt("return", {
              success: false
            });

          case 12:
            spinner = (0, _ora["default"])('Template is downloading...').start();
            _context2.prev = 13;
            _context2.next = 16;
            return downloadFromRepository(url, directory, {
              clone: true
            });

          case 16:
            spinner.succeed('Template download success!');
            return _context2.abrupt("return", {
              success: true
            });

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](13);
            spinner.fail('Template download failed!');

            _log.log.symbolError(_context2.t0);

            return _context2.abrupt("return", {
              success: false
            });

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[13, 20]]);
  }));

  return function downloadSourceToDirectory(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = downloadSourceToDirectory;
exports["default"] = _default;