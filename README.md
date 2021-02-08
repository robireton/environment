# environment
helpers for interacting with the process environment


## install
```sh
$ npm install @robireton/environment
```

## usage
```js
const env = require('@robireton/environment')

env.parseBool('SOME_NAME')

env.parseInt('SOME_NAME')

env.parseInt('SOME_NAME', 1970)

env.parseFloat('SOME_NAME')

env.parseFloat('SOME_NAME', 2.71828)

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
`int`: result of parsing the value of *name*.

#### examples
```js
environment.parseInt('CLICOLOR')
// => 1
```

```js
environment.parseInt('SHELL', 1066)
// => 1066
```

### parseFloat( *name* : `string` [, *default* : `float` ] )

#### arguments
*name* : `string`: name of an environment variable

*default* : `float`: a value to return if the name is not set or can’t be parsed

#### returns
`float`: result of parsing the value of *name*.

#### examples
```js
environment.parseFloat('TERM_PROGRAM_VERSION')
// => 433
```

```js
environment.parseFloat('SHELL', 3.1415)
// => 3.1415
```
