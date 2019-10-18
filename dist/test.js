"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ora = _interopRequireDefault(require("ora"));

var _fs = _interopRequireDefault(require("fs"));

var _download = _interopRequireDefault(require("./utils/download"));

var _constants = require("./constants");

var _regeneratorRuntime2 = require("regenerator-runtime");

var spinner = (0, _ora["default"])('template is downloading...', {
  discardStdin: false
}).start(); // setTimeout(function() {
//   // process.exit();
//   spinner.succeed();
// }, 5000);
// process.on('exit', function() {
//   setTimeout(function() {
//     spinner.succeed();
//     // spinner.clear();
//   });
//   // spinner.render();
//   spinner.succeed();
//   console.log();
//   console.log(`Project is based on ${BASE}`);
//   console.log('Project initialization finished!');
// });

var start =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var fileName;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _download["default"])('github:programary/stms_web#master', 'test/tmp');

          case 3:
            fileName = "test/tmp/.leonrc";

            _fs["default"].writeFileSync(fileName, JSON.stringify(_constants.SETTING, null, "\t"), "utf-8"); // process.exit();


            spinner.succeed();
            console.log();
            console.log("Project is based on ".concat(_constants.BASE));
            console.log('Project initialization finished!');
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            spinner.fail();

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

start();