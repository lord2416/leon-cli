import program from 'commander';
import { execute } from './commands';
import { actions, usages, ACTIONMAP, VERSION } from './constants';
import { log } from './utils/log';

const help = () => {
  log.space();
  log.green('Usages:');
  usages.forEach(usage => {
    log.green(usage);
  });
};

log.space();
actions.forEach(({ name, description, alias }) => {
  program
    .command(name)
    .description(description)
    .alias(alias)
    .action(() => {
      execute(name, process.argv.slice(3));
    });
});

program.name('leon').usage('cli [options]');
program.on('-h', help);
program.on('--help', help);
program.version(VERSION, '-v --version').parse(process.argv);

// when leon no params
if (!process.argv.slice(2).length) {
  program.outputHelp(t => t);
}
