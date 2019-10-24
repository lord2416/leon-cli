import chalk from 'chalk';
import symbol from 'log-symbols';

const compose = (...funcs) => funcs.reduce((a, b) => args => a(b(args)));

export const green = t => chalk.green(t);

export const red = t => chalk.red(t);

export const bold = t => chalk.bold(t);

export const log = {
  error: t => {
    const fn = compose(
      red,
      bold
    );
    console.log(fn(`  Error: ${t}`));
  },
  success: t => {
    const fn = compose(
      green,
      bold
    );
    console.log(fn(`  Success: ${t}`));
  },
  symbolSuccess: t => {
    console.log(symbol.success, green(t));
  },
  symbolError: t => {
    console.log(symbol.error, red(t));
  },
  normal: t => {
    console.log(t);
  },
  green: t => {
    console.log(green(t));
  },
  greenBold: t => {
    const fn = compose(
      green,
      bold
    );
    console.log(fn(t));
  },
  red: t => {
    console.log(red(t));
  },
  redBold: t => {
    const fn = compose(
      red,
      bold
    );
    console.log(fn(t));
  },
  space: () => {
    console.log();
  },
};
