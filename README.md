# environment

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![current version](https://img.shields.io/npm/v/@robireton/environment)](https://www.npmjs.com/package/@robireton/environment)
[![install size](https://packagephobia.com/badge?p=@robireton/environment)](https://packagephobia.com/result?p=@robireton/environment)

*zero-dependency helpers for interacting with the process environment*

Starting with v3.0.0, this is an ECMAScript module—stick with v2.x.x if you need a CommonJS module.

---

## install
```sh
$ npm install @robireton/environment
```

## usage
```js
import * as environment from '@robireton/environment'

environment.parseBool('SOME_NAME')

environment.parseInt('SOME_NAME')

environment.parseInt('SOME_NAME', 1970)

environment.parseFloat('SOME_NAME')

environment.parseFloat('SOME_NAME', 2.71828)

environment.parseList('SOME_NAME')

```

## methods

### parseBool( `string` )

#### arguments
`string`: name of an environment variable

#### returns
`bool`: whether or not the environment variable is set to the string `true` (case insensitive)

#### example
```js
environment.parseBool('SHELL')
// => false
```

### parseInt( *name* : `string` [, *default* : `int` ] )

#### arguments
*name* : `string`: name of an environment variable

*default* : `int`: a value to return if the name is not set or can’t be parsed

#### returns
`int`: result of parsing the value of *name*

#### examples
```js
environment.parseInt('CLICOLOR')
// => 1
```

```js
environment.parseInt('SHELL', 1066)
// => 1066
```

### parseInts( *name* : `string` [, *pattern* : `RegExp` or `string` ] )

#### arguments
*name* : `string`: name of an environment variable

*pattern* : `regular expression` or `string` (defaults to `/[^0-9-]+/` — one or more non-digit/hyphen-minus characters) used to split the value of the environment variable into an array

#### returns
`[ int, … ]`: an array of integers, or an empty array if *name* isn’t set 

#### example
```js
environment.parseInts('127.0.0.1', '.')
// => [ 127, 0, 0, 1 ]
```

### parseFloat( *name* : `string` [, *default* : `float` ] )

#### arguments
*name* : `string`: name of an environment variable

*default* : `float`: a value to return if the name is not set or can’t be parsed

#### returns
`float`: result of parsing the value of *name*

#### examples
```js
environment.parseFloat('TERM_PROGRAM_VERSION')
// => 433
```

```js
environment.parseFloat('SHELL', 3.1415)
// => 3.1415
```

### parseList( *name* : `string` [, *pattern* : `RegExp` or `string` ] )

#### arguments
*name* : `string`: name of an environment variable

*pattern* : `regular expression` or `string` (defaults to `/\W+/` — one or more non-word characters) used to split the value of the environment variable into an array

#### returns
`[ string, … ]`: an array of (non-empty) strings, or an empty array if *name* isn’t set 

#### example
```js
environment.parseList('PATH', ':')
// => [ '/usr/local/bin', '/usr/bin', '/bin', '/usr/sbin', '/sbin' ]
```
