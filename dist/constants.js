"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SETTING = exports.BASE = exports.VERSION = exports.usages = exports.bold = exports.red = exports.green = exports.actions = exports.ACTIONMAP = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

var _package = require("../package.json");

var ACTIONMAP = {
  INIT: {
    NAME: 'init',
    ALIAS: 'i'
  },
  CONFIG: {
    NAME: 'config',
    ALIAS: 'c'
  }
};
exports.ACTIONMAP = ACTIONMAP;
var actions = [{
  name: ACTIONMAP.INIT.NAME,
  alias: ACTIONMAP.INIT.ALIAS,
  description: 'create a new project by templates'
}, {
  name: ACTIONMAP.CONFIG.NAME,
  alias: ACTIONMAP.CONFIG.ALIAS,
  description: 'config .leonsrc'
}];
exports.actions = actions;

var green = function green(t) {
  return _chalk["default"].green(t);
};

exports.green = green;

var red = function red(t) {
  return _chalk["default"].red(t);
};

exports.red = red;

var bold = function bold(t) {
  return _chalk["default"].bold(t);
};

exports.bold = bold;
var usages = ['  leon i|init <template-name> <project-name>: init a project by template', '  leon c|config set <key> <value>: set config options', '  leon c|config get <key>: get config options', '  leon c|config remove <key>: remove config options'];
exports.usages = usages;
var VERSION = _package.version;
exports.VERSION = VERSION;
var BASE = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
exports.BASE = BASE;
var SETTING = {
  template: {
    normal: 'direct:https://github.com/programary/stms_web.git'
  },
  registry: 'github:programary/stms_web#master'
};
exports.SETTING = SETTING;