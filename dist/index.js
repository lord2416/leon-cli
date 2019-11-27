"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _commander = _interopRequireDefault(require("commander"));

var _commands = require("./commands");

var _constants = require("./constants");

var _log = require("./utils/log");

var help = function help() {
  _log.log.space();

  _log.log.green('Usages:');

  _constants.usages.forEach(function (usage) {
    _log.log.green(usage);
  });
};

_log.log.space();

_constants.actions.forEach(function (_ref) {
  var name = _ref.name,
      description = _ref.description,
      alias = _ref.alias;

  _commander["default"].command(name).description(description).alias(alias).action(function () {
    (0, _commands.execute)(name, process.argv.slice(3));
  });
});

_commander["default"].name('leon').usage('cli [options]');

_commander["default"].on('-h', help);

_commander["default"].on('--help', help);

_commander["default"].version(_constants.VERSION, '-v --version').parse(process.argv); // when leon no params


if (!process.argv.slice(2).length) {
  _commander["default"].outputHelp(function (t) {
    return t;
  });
}