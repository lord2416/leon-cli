English | [简体中文](https://github.com/lord2416/leon-cli/blob/dev/README_zh-CN.md)

leon-cli -- Template manager
===

[![npm](https://img.shields.io/npm/v/leon-cli)](https://www.npmjs.com/package/leon-cli)

## Install

```
$ npm install -g leon-cli
```

## Example
```
## Show template lists
$ leon ls
```

```
## Switch template to use
$ leon use leonCli  //switch template
```

```
## Operate templates
$ leon get leonCli
$ leon set leonCli "direct:https://github.com/lord2416/leon-cli.git"
$ leon remove leonCli
```

```
## Init project
$ leon init <your-project-name>
```

## Usage

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
