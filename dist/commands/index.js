"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.execute = void 0;

var _config = _interopRequireDefault(require("./config"));

var _init = _interopRequireDefault(require("./init"));

var commandsMap = {
  config: _config["default"],
  init: _init["default"]
};

var execute = function execute(name, args) {
  return commandsMap[name](args);
};

exports.execute = execute;
var _default = commandsMap;
exports["default"] = _default;