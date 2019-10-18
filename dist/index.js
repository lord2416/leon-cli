"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _commander = _interopRequireDefault(require("commander"));

var _commands = require("./commands");

var _constants = require("./constants");

var help = function help() {
  console.log();
  console.log((0, _constants.green)('Usages:'));

  _constants.usages.forEach(function (usage) {
    console.log((0, _constants.green)(usage));
  });
};

_constants.actions.forEach(function (_ref) {
  var name = _ref.name,
      description = _ref.description,
      alias = _ref.alias;

  _commander["default"].command(name).description(description).alias(alias).action(function () {
    switch (name) {
      case _constants.ACTIONMAP.CONFIG.NAME:
        (0, _commands.execute)(_constants.ACTIONMAP.CONFIG.NAME, process.argv.slice(3));
        break;

      case _constants.ACTIONMAP.INIT.NAME:
        (0, _commands.execute)(_constants.ACTIONMAP.INIT.NAME, process.argv.slice(3));
        break;

      default:
        break;
    }
  });
});

_commander["default"].name('leon').usage('[options]');

_commander["default"].on('-h', help);

_commander["default"].on('--help', help);

_commander["default"].version(_constants.VERSION, "-v --version").parse(process.argv); // when leon no params


if (!process.argv.slice(2).length) {
  _commander["default"].outputHelp(function (t) {
    return (0, _constants.green)(t);
  });
}