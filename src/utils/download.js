import downloadGit from 'download-git-repo';
import ora from 'ora';
import { readRCFile } from './resource';
import { log } from './log';

const downloadFromRepository = async (
  url,
  directoryPath,
  opts = { clone: false }
) => {
  return new Promise((resolve, reject) => {
    downloadGit(url, directoryPath, opts, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

const downloadSourceToDirectory = async directory => {
  const { registry, template } = await readRCFile();

  if (!registry) {
    log.error(
      `registry not exists, please use "leon use <template-name>" to set registry first!`
    );
    return {
      success: false,
    };
  }

  const url = template[registry];

  if (!url) {
    log.error(`template <${registry}>: "${url}" is not correct!`);
    return {
      success: false,
    };
  }

  const spinner = ora('Template is downloading...').start();
  try {
    await downloadFromRepository(url, directory, {
      clone: true,
    });
    spinner.succeed('Template download success!');
    return {
      success: true,
    };
  } catch (e) {
    spinner.fail('Template download failed!');
    log.symbolError(e);
    return {
      success: false,
    };
  }
};

export default downloadSourceToDirectory;
