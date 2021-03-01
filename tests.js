const assert = require('assert').strict
const env = require('./environment.js')

process.env.TESTVAL = 'true'
assert.equal(env.parseBool('TESTVAL'), true, 'parseBool(\'TESTVAL\') failed to return true')

process.env.TESTVAL = 'false'
assert.equal(env.parseBool('TESTVAL'), false, 'parseBool(\'TESTVAL\') failed to return false')

process.env.TESTVAL = '1970'
assert.equal(env.parseInt('TESTVAL'), 1970, 'parseInt(\'TESTVAL\') failed to return 1970 as an integer')

process.env.TESTVAL = '2.71828'
assert.equal(env.parseFloat('TESTVAL'), 2.71828, 'parseFloat(\'TESTVAL\') failed to return 2.71828 as a float')

process.env.TESTVAL = 'one, two, three'
assert.deepEqual(env.parseList('TESTVAL'), ['one', 'two', 'three'], 'parseList(\'TESTVAL\') failed to return [\'one\', \'two\', \'three\']')
assert.deepEqual(env.parseList('TESTVAL', ', '), ['one', 'two', 'three'], 'parseList(\'TESTVAL\', \', \') failed to return [\'one\', \'two\', \'three\']')
assert.deepEqual(env.parseList('TESTVAL', /t[wh]/), ['one, ', 'o, ', 'ree'], 'parseList(\'TESTVAL\', /t[wh]/) failed to return [\'one, \', \'o, \', \'ree\']')

process.env.TESTVAL = 'one|two|three|'
assert.deepEqual(env.parseList('TESTVAL'), ['one', 'two', 'three'], 'parseList(\'TESTVAL\') failed to return [\'one\', \'two\', \'three\']')

delete process.env.TESTVAL
console.log('ignore warnings about environment variable TESTVAL not geing set')
assert.equal(env.parseInt('TESTVAL', 1970), 1970, 'parseInt(\'TESTVAL\', 1970) failed to default to 1970')
assert.equal(env.parseFloat('TESTVAL', 2.71828), 2.71828, 'parseFloat(\'TESTVAL\', 2.71828) failed to default to 2.71828')
assert.deepEqual(env.parseList('TESTVAL'), [], 'parseList(\'TESTVAL\') failed to return []')
