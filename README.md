# environment
helpers for interacting with the process environment


## install
```sh
$ npm install @robireton/environment
```

## usage
```js
import environment from '@robireton/environment'

environment.parseBool('SOME_NAME')

environment.parseFloat('SOME_NAME')

environment.parseFloat('SOME_NAME', 2.71828)

```

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

