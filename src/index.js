import program from 'commander';
import { execute } from './commands';
import { actions, green, usages, ACTIONMAP, VERSION } from './constants';

const help = () => {
  console.log();
  console.log(green('Usages:'));
  usages.forEach(usage => {
    console.log(green(usage));
  });
}

actions.forEach(({ name, description, alias }) => {
  program
    .command(name)
    .description(description)
    .alias(alias)
    .action(() => {
      switch (name) {
        case ACTIONMAP.CONFIG.NAME:
          execute(ACTIONMAP.CONFIG.NAME, process.argv.slice(3));
          break;
        case ACTIONMAP.INIT.NAME:
            execute(ACTIONMAP.INIT.NAME, process.argv.slice(3));
          break;
        default:
          break;
      }
    });
});

program.name('leon').usage('[options]');
program.on('-h', help);
program.on('--help', help);
program.version(VERSION, "-v --version").parse(process.argv);

// when leon no params
if (!process.argv.slice(2).length) {
  program.outputHelp(t => green(t));
}
