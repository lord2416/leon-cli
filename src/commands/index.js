import config from './config';
import init from './init';

const commandsMap = {
  config,
  init,
};

export const execute = (name, args) => commandsMap[name](args);

export default commandsMap;