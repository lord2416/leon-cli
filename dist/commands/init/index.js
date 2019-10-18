"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _ora = _interopRequireDefault(require("ora"));

var _inquirer = _interopRequireDefault(require("inquirer"));

var _logSymbols = _interopRequireDefault(require("log-symbols"));

var _download = _interopRequireDefault(require("../../utils/download"));

var _constants = require("../../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var promptings = [{
  name: 'description',
  message: 'Please enter the Description: '
}, {
  name: 'author',
  message: 'Please enter the Author name: '
}];

var downloadTemp =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(name) {
    var spinner;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(name);
            spinner = (0, _ora["default"])('template is downloading...').start();
            _context.prev = 2;
            _context.next = 5;
            return (0, _download["default"])(_constants.SETTING.registry, name);

          case 5:
            spinner.succeed('template download success!');
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            spinner.fail('template download failed!');

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8]]);
  }));

  return function downloadTemp(_x) {
    return _ref.apply(this, arguments);
  };
}();

var fileOperate = function fileOperate(_ref2) {
  var name = _ref2.name,
      _ref2$answer = _ref2.answer,
      author = _ref2$answer.author,
      description = _ref2$answer.description;
  var file = "".concat(name, "/package.json");

  if (_fs["default"].existsSync(file)) {
    var data = _fs["default"].readFileSync(file).toString();

    var setting = _objectSpread({}, JSON.parse(data), {
      name: name,
      author: author,
      description: description
    });

    _fs["default"].writeFileSync(file, JSON.stringify(setting, null, "\t"), "utf-8");
  }

  console.log();
  console.log(_logSymbols["default"].success, (0, _constants.green)("Project initialization finished!"));
};

var init =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(args) {
    var _args2, name;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(args);
            _args2 = (0, _slicedToArray2["default"])(args, 1), name = _args2[0];

            if (!_fs["default"].existsSync(name)) {
              // 初始化交互
              _inquirer["default"].prompt(promptings).then(
              /*#__PURE__*/
              function () {
                var _ref4 = (0, _asyncToGenerator2["default"])(
                /*#__PURE__*/
                _regenerator["default"].mark(function _callee2(answer) {
                  return _regenerator["default"].wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          console.log(answer);
                          _context2.next = 3;
                          return downloadTemp(name);

                        case 3:
                          fileOperate({
                            name: name,
                            answer: answer
                          });

                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x3) {
                  return _ref4.apply(this, arguments);
                };
              }());
            } else {
              // 项目已经存在
              console.log(_logSymbols["default"].error, (0, _constants.red)("The project <".concat(name, "> already exists")));
            }

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function init(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = init;
exports["default"] = _default;