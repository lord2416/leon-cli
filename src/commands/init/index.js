import fs from 'fs';
import inquirer from 'inquirer';
import downloadSourceToDirectory from '../../utils/download';
import { log } from '../../utils/log';

const promptings = [
  {
    name: 'description',
    message: 'Please enter the Description: ',
  },
  {
    name: 'author',
    message: 'Please enter the Author name: ',
  },
];

const fileOperate = ({ name, answer: { author, description } }) => {
  const file = `${name}/package.json`;

  if (fs.existsSync(file)) {
    const data = fs.readFileSync(file).toString();
    const setting = {
      ...JSON.parse(data),
      name,
      author,
      description,
    };

    fs.writeFileSync(file, JSON.stringify(setting, null, '\t'), 'utf-8');
  }

  log.symbolSuccess('Project initialization finished!');
};

const init = async args => {
  const [directory] = args;

  if (!fs.existsSync(directory)) {
    // 初始化交互
    inquirer.prompt(promptings).then(async answer => {
      const { success } = await downloadSourceToDirectory(directory);
      if (success) {
        fileOperate({
          name: directory,
          answer,
        });
      }
    });
  } else {
    // 项目已经存在
    log.symbolError(`The project <${name}> already exists`);
  }
};

export default init;
