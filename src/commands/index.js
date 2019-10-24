import init from './init';
import list from './list';
import use from './use';
import operates from './operates';

const commandsMap = {
  init,
  list,
  use,
  ...operates,
};

export const execute = (name, args) => commandsMap[name](args);

export default commandsMap;
