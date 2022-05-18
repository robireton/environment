import assert from 'assert/strict'
import { env } from 'process'
import * as environment from './environment.js'

env.TESTVAL = 'true'
assert.equal(environment.parseBool('TESTVAL'), true, 'parseBool(\'TESTVAL\') failed to return true')

env.TESTVAL = 'false'
assert.equal(environment.parseBool('TESTVAL'), false, 'parseBool(\'TESTVAL\') failed to return false')

env.TESTVAL = '1970'
assert.equal(environment.parseInt('TESTVAL'), 1970, 'parseInt(\'TESTVAL\') failed to return 1970 as an integer')

env.TESTVAL = '1, 2 -3;4.5'
assert.deepEqual(environment.parseInts('TESTVAL'), [1, 2, -3, 4, 5], 'parseList(\'TESTVAL\') failed to return [1, 2, -3, 4, 5]')

env.TESTVAL = '2.71828'
assert.equal(environment.parseFloat('TESTVAL'), 2.71828, 'parseFloat(\'TESTVAL\') failed to return 2.71828 as a float')

env.TESTVAL = 'one, two, three'
assert.deepEqual(environment.parseList('TESTVAL'), ['one', 'two', 'three'], 'parseList(\'TESTVAL\') failed to return [\'one\', \'two\', \'three\']')
assert.deepEqual(environment.parseList('TESTVAL', ', '), ['one', 'two', 'three'], 'parseList(\'TESTVAL\', \', \') failed to return [\'one\', \'two\', \'three\']')
assert.deepEqual(environment.parseList('TESTVAL', /t[wh]/), ['one, ', 'o, ', 'ree'], 'parseList(\'TESTVAL\', /t[wh]/) failed to return [\'one, \', \'o, \', \'ree\']')

env.TESTVAL = 'one|two|three|'
assert.deepEqual(environment.parseList('TESTVAL'), ['one', 'two', 'three'], 'parseList(\'TESTVAL\') failed to return [\'one\', \'two\', \'three\']')

delete env.TESTVAL
if (env.NODE_ENV !== 'production') console.log('* ignore warnings about environment variable TESTVAL not being set *')
assert.equal(environment.parseInt('TESTVAL', 1970), 1970, 'parseInt(\'TESTVAL\', 1970) failed to default to 1970')
assert.deepEqual(environment.parseInts('TESTVAL'), [], 'parseInts(\'TESTVAL\') failed to return []')
assert.equal(environment.parseFloat('TESTVAL', 2.71828), 2.71828, 'parseFloat(\'TESTVAL\', 2.71828) failed to default to 2.71828')
assert.deepEqual(environment.parseList('TESTVAL'), [], 'parseList(\'TESTVAL\') failed to return []')
