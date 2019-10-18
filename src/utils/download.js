import downloadGit from 'download-git-repo';
import { getAll } from './resource';
import { resolve } from 'dns';

const download = async (url, directoryPath) => {
  const config = await getAll();
  return new Promise((resolve, reject) => {
    downloadGit(url, directoryPath, err => {
      if (err) {
        reject(err);
      }
      resolve();
    })
  });
};

export default download;