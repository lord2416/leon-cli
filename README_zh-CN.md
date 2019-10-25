[English](./README.md) | 简体中文

leon-cli -- 模板管理工具
===

## 安装

```
$ npm install -g leon
```

## 示例
```
## 查看模板列表
$ leon ls
```

```
## 使用模板
$ leon use leonCli  //switch template
```

```
## 模板管理操作
$ leon get leonCli
$ leon set leonCli "direct:https://github.com/lord2416/leon-cli.git"
$ leon remove leonCli
```

```
## 初始化项目
$ leon init <your-project-name>
```

## 使用

```
Usage: leon cli [options]

Options:
  -v --version  output the version number
  -h, --help    output usage information

Commands:
  init|i        Create a new project by templates
  list|ls       Show template lists
  use|u         Switch template to use
  get|g         Get one custom template, if only use "leon get" show all templates
  set|s         Add or modify one custom template
  remove|rm     Delete one custom template

Usages:
  leon init <project-name>                   : Init a project by template
  leon list                                  : List all the templates
  leon get <key>?                            : Get one custom template
  leon set <key> <value>                     : Add or modify one custom template
  leon remove <key>                          : Delete one custom template
  leon use <template-name>                   : Switch template to use
```

## License

[MIT](https://github.com/umijs/umi/blob/master/LICENSE)
