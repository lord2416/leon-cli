import fs from 'fs';
import { promisify } from 'util';
import { SETTING } from '../constants';
import { leonrc } from './path';
import { log } from './log';

const exists = promisify(fs.exists);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

export const encode = (opt = {}) => JSON.stringify(opt, null, '\t');
export const decode = str => JSON.parse(str);

export const readRCFile = async key => {
  const flag = await exists(leonrc);

  if (!flag) {
    await writeFile(
      leonrc,
      encode({
        ...SETTING,
      }),
      'utf8'
    );
  }

  const buf = await readFile(leonrc, 'utf8');
  const data = decode(buf);
  return key ? data[key] : data;
};

export const ls = async () => {
  const { template, registry } = await readRCFile();
  const tmpList = Object.keys(template).map(key => ({
    key,
    value: template[key],
  }));

  if (tmpList.length > 0) {
    tmpList.forEach(({ key, value }) => {
      if (key === registry) {
        log.green(`  * ${key}: ${value}`);
      } else {
        log.normal(`    ${key}: ${value}`);
      }
    });
  } else {
    log.redBold(`    Please add a custom template first!`);
  }
};

export const changeRegistry = async key => {
  if (!key) {
    return log.error('Template <key> is required');
  }

  const { registry, template, ...others } = await readRCFile();

  if (template[key]) {
    const options = {
      ...others,
      template,
      registry: key,
    };
    await writeFile(leonrc, encode(options), 'utf8');
    log.green(`    Now using template <${key}>: "${template[key]}"`);
  } else {
    log.error(`template <${key}> not exists, please add first!`);
  }
};
