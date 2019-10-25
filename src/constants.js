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
  USE: {
    NAME: 'use',
    ALIAS: 'u',
  },
  LIST: {
    NAME: 'list',
    ALIAS: 'ls',
  },
  TEMPLATE: {
    NAME: 'template',
    ALIAS: 'tp',
  },
  GET: {
    NAME: 'get',
    ALIAS: 'g',
  },
  SET: {
    NAME: 'set',
    ALIAS: 's',
  },
  REMOVE: {
    NAME: 'remove',
    ALIAS: 'rm',
  },
};

export const actions = [
  {
    name: ACTIONMAP.INIT.NAME,
    alias: ACTIONMAP.INIT.ALIAS,
    description: 'Create a new project by templates',
  },
  {
    name: ACTIONMAP.LIST.NAME,
    alias: ACTIONMAP.LIST.ALIAS,
    description: 'Show template lists',
  },
  {
    name: ACTIONMAP.USE.NAME,
    alias: ACTIONMAP.USE.ALIAS,
    description: 'Switch template to use',
  },
  {
    name: ACTIONMAP.GET.NAME,
    alias: ACTIONMAP.GET.ALIAS,
    description:
      'Get one custom template, if only use "leon get" show all templates',
  },
  {
    name: ACTIONMAP.SET.NAME,
    alias: ACTIONMAP.SET.ALIAS,
    description: 'Add or modify one custom template',
  },
  {
    name: ACTIONMAP.REMOVE.NAME,
    alias: ACTIONMAP.REMOVE.ALIAS,
    description: 'Delete one custom template',
  },
];

export const usages = [
  '  leon init <project-name>                   : Init a project by template',
  '  leon list                                  : List all the templates',
  '  leon get <key>?                            : Get one custom template',
  '  leon set <key> <value>                     : Add or modify one custom template',
  '  leon remove <key>                          : Delete one custom template',
  '  leon use <template-name>                   : Switch template to use',
];

export const VERSION = version;

export const BASE =
  process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

export const SETTING = {
  template: {
    leonCli: 'direct:https://github.com/lord2416/leon-cli.git',
  },
  registry: 'leonCli',
};
