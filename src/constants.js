import chalk from "chalk";
import { version } from '../package.json';

export const ACTIONMAP = {
  INIT: {
    NAME: 'init',
    ALIAS: 'i',
  },
  CONFIG: {
    NAME: 'config',
    ALIAS: 'c',
  },
};

export const actions = [
  {
    name: ACTIONMAP.INIT.NAME,
    alias: ACTIONMAP.INIT.ALIAS,
    description: 'create a new project by templates',
  },
  {
    name: ACTIONMAP.CONFIG.NAME,
    alias: ACTIONMAP.CONFIG.ALIAS,
    description: 'config .leonsrc',
  },
];

export const green = t => chalk.green(t);

export const red = t => chalk.red(t);

export const bold = t => chalk.bold(t);

export const usages = [
  '  leon i|init <template-name> <project-name>: init a project by template',
  '  leon c|config set <key> <value>: set config options',
  '  leon c|config get <key>: get config options',
  '  leon c|config remove <key>: remove config options',
];

export const VERSION = version;

export const BASE = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

export const SETTING = {
  template: {
    normal: 'direct:https://github.com/programary/stms_web.git',
  },
  registry: 'github:programary/stms_web#master',
};
