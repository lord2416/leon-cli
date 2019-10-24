"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _fs = _interopRequireDefault(require("fs"));

var _inquirer = _interopRequireDefault(require("inquirer"));

var _download = _interopRequireDefault(require("../../utils/download"));

var _log = require("../../utils/log");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var promptings = [{
  name: 'description',
  message: 'Please enter the Description: '
}, {
  name: 'author',
  message: 'Please enter the Author name: '
}];

var fileOperate = function fileOperate(_ref) {
  var name = _ref.name,
      _ref$answer = _ref.answer,
      author = _ref$answer.author,
      description = _ref$answer.description;
  var file = "".concat(name, "/package.json");

  if (_fs["default"].existsSync(file)) {
    var data = _fs["default"].readFileSync(file).toString();

    var setting = _objectSpread({}, JSON.parse(data), {
      name: name,
      author: author,
      description: description
    });

    _fs["default"].writeFileSync(file, JSON.stringify(setting, null, '\t'), 'utf-8');
  }

  _log.log.symbolSuccess('Project initialization finished!');
};

var init =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(args) {
    var _args, directory;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _args = (0, _slicedToArray2["default"])(args, 1), directory = _args[0];

            if (!_fs["default"].existsSync(directory)) {
              // 初始化交互
              _inquirer["default"].prompt(promptings).then(
              /*#__PURE__*/
              function () {
                var _ref3 = (0, _asyncToGenerator2["default"])(
                /*#__PURE__*/
                _regenerator["default"].mark(function _callee(answer) {
                  var _ref4, success;

                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return (0, _download["default"])(directory);

                        case 2:
                          _ref4 = _context.sent;
                          success = _ref4.success;

                          if (success) {
                            fileOperate({
                              name: directory,
                              answer: answer
                            });
                          }

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2) {
                  return _ref3.apply(this, arguments);
                };
              }());
            } else {
              // 项目已经存在
              _log.log.symbolError("The project <".concat(name, "> already exists"));
            }

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function init(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = init;
exports["default"] = _default;