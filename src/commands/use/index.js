import { changeRegistry } from '../../utils/resource';
import { log } from '../../utils/log';

const use = async args => {
  const [key] = args;
  if (!key) {
    return log.error('template <key> is required');
  }
  await changeRegistry(key);
};

export default use;
