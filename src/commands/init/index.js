import fs from "fs";
import ora from "ora";
import inquirer from "inquirer";
import symbol from "log-symbols";
import download from '../../utils/download';
import { green, red, SETTING } from '../../constants';

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

const downloadTemp = async name => {
  console.log(name);
  const spinner = ora('template is downloading...').start();
  try {
    await download(SETTING.registry, name);
    spinner.succeed('template download success!');
  } catch {
    spinner.fail('template download failed!');
  }
};

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

    fs.writeFileSync(
      file,
      JSON.stringify(setting, null, "\t"),
      "utf-8"
    );
  }

  console.log();
  console.log(
    symbol.success,
    green("Project initialization finished!")
  );
}

const init = async args => {
  console.log(args);
  const [ name ] = args;

  if (!fs.existsSync(name)) {
    // 初始化交互
    inquirer
      .prompt(promptings)
      .then(async answer => {
        console.log(answer);
        await downloadTemp(name);
        fileOperate({
          name,
          answer,
        });
      });
  } else {
    // 项目已经存在
    console.log(symbol.error, red(`The project <${name}> already exists`));
  }
};

export default init;