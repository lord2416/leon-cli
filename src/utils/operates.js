import fs from 'fs';
import { promisify } from 'util';
import { leonrc } from './path';
import { log } from './log';
import { readRCFile, encode, decode } from './resource';
import { async } from 'regenerator-runtime';

const exists = promisify(fs.exists);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

export const get = async key => {
  const { template } = await readRCFile();

  if (key) {
    if (template[key]) {
      log.normal(template[key]);
    } else {
      log.error(`template <${key}> not exists!`);
    }
  } else {
    log.normal(encode(template));
  }
};

export const set = async (key, value) => {
  if (!key) {
    return log.error('<key> is required!');
  }

  if (!value) {
    return log.error('<value> is required!');
  }

  const { template, ...others } = await readRCFile();
  const options = {
    ...others,
    template: {
      ...template,
      [key]: value,
    },
  };
  await writeFile(leonrc, encode(options), 'utf8');
  log.success(`template <${key}>: "${value}" is added!`);
};

export const remove = async key => {
  if (!key) {
    return log.error('<key> is required!');
  }

  const { template: prevTemp, ...others } = await readRCFile();

  if (!prevTemp[key]) {
    return log.error(`template <${key}> not exists!`);
  }

  const template = Object.keys(prevTemp).reduce((acc, cur) => {
    if (cur !== key) {
      acc[cur] = prevTemp[cur];
    }
    return acc;
  }, {});
  const options = {
    ...others,
    template,
  };
  await writeFile(leonrc, encode(options), 'utf8');
  log.success(`template <${key}>: "${prevTemp[key]}" is deleted!`);
};
