import ora from 'ora';
import fs from 'fs';
import download from './utils/download';
import { SETTING, BASE } from './constants';
import { async } from 'regenerator-runtime';

const spinner = ora('template is downloading...', { discardStdin: false, }).start();

// setTimeout(function() {
//   // process.exit();
//   spinner.succeed();
// }, 5000);

// process.on('exit', function() {
//   setTimeout(function() {
//     spinner.succeed();
//     // spinner.clear();
//   });
//   // spinner.render();
//   spinner.succeed();
//   console.log();
//   console.log(`Project is based on ${BASE}`);
//   console.log('Project initialization finished!');
// });

const start = async () => {
  try {
    await download('github:programary/stms_web#master', 'test/tmp');
    const fileName = `test/tmp/.leonrc`;

    fs.writeFileSync(
      fileName,
      JSON.stringify(SETTING, null, "\t"),
      "utf-8"
    );

    // process.exit();
    spinner.succeed();
    console.log();
    console.log(`Project is based on ${BASE}`);
    console.log('Project initialization finished!');
  } catch {
    spinner.fail();
  }
};

start();
