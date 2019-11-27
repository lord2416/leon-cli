import { get, set, remove } from '../../utils/operates';
import { ls } from '../../utils/resource';
import { ACTIONMAP } from '../../constants';

const operates = {
  [ACTIONMAP.GET.NAME]: async args => {
    const [key] = args;

    if (key) {
      await get(key);
    } else {
      await ls();
    }
  },
  [ACTIONMAP.SET.NAME]: async args => {
    const [key, value] = args;
    await set(key, value);
  },
  [ACTIONMAP.REMOVE.NAME]: async args => {
    const [key] = args;
    await remove(key);
  },
};

export default operates;
