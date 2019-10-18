import fs from 'fs';
import { promisify } from 'util';
import { decode, encode } from 'ini';
import { BASE, SETTING, bold, red } from '../constants';

const exits = promisify(fs.exists);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const leonrc = `${BASE}/.leonrc`;

export const get = async key => {
  const exit = await exits(leonrc);

  if (exit) {
    const buf = await readFile(leonrc, 'utf8');
    const data = decode(buf);
    return data[key] || `${key} not exists`;
  }

  return SETTING[key] || `${key} not exists`;
}

export const getAll = async () => {
  const exit = await exits(leonrc);

  if (exit) {
    const buf = await readFile(leonrc, 'utf8');
    const data = decode(buf);
    return data;
  }

  return SETTING;
}

export const set = async (key, value) => {
  if (!key) {
    return console.log(red(bold('Error:')), red('<key> is required'));
  }

  if (!value) {
    return console.log(red(bold('Error:')), red('<value> is required'));
  }

  const exit = await exits(leonrc);
  let options;

  if (exit) {
    const buf = await readFile(leonrc, 'utf8');
    const data = decode(buf);
    options = {
      ...data,
      [key]: value,
    };
  } else {
    options = {
      ...SETTING,
      [key]: value,
    };
  }

  await writeFile(leonrc, encode(options), 'utf8');
}

export const remove = async key => {
  const exit = await exits(leonrc);
  
  if (exit) {
    const buf = await readFile(leonrc, 'utf8');
    const { key: k, ...others } = decode(buf);
    await writeFile(leonrc, encode(others), 'utf8');
  }
}