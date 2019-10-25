leon-cli -- Template manager
===

## Install

```
$ npm install -g leon
```

## Example
```
$ leon ls

* leonCli: direct:https://github.com/lord2416/leon-cli.git

```

```
$ leon use leonCli  //switch template

    Now using template <leonCli>: "direct:https://github.com/lord2416/leon-cli.git"

```

## Usage

```
Usage: leon cli [options]

Options:
  -v --version  output the version number
  -h, --help    output usage information

Commands:
  init|i        Create a new project by templates
  list|ls       Show template lists.
  use|u         Change registry by a template
  get|g         Get one custom template, if only use "leon get" show all templates
  set|s         Add or modify one custom template
  remove|rm     Delete one custom template

Usages:
  leon init <project-name>                   : Init a project by template
  leon list                                  : List all the templates
  leon get <key>?                            : Get one custom template
  leon set <key> <value>                     : Add or modify one custom template
  leon remove <key>                          : Delete one custom template
  leon use <template-name>                   : Change registry by template
```
