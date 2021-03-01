'use strict'

module.exports.parseBool = name => {
  if (!(name in process.env)) console.log(`Warning: environment variable ${name} is not set`)
  return String(process.env[name]).toLowerCase() === 'true'
}

module.exports.parseInt = (name, ifNaN) => {
  if (!(name in process.env)) console.log(`Warning: environment variable ${name} is not set`)
  const x = Number.parseInt(process.env[name], 10)
  return Number.isNaN(x) ? ifNaN : x
}

module.exports.parseFloat = (name, ifNaN) => {
  if (!(name in process.env)) console.log(`Warning: environment variable ${name} is not set`)
  const x = Number.parseFloat(process.env[name])
  return Number.isNaN(x) ? ifNaN : x
}

module.exports.parseList = (name, pattern = /\W+/) => {
  if (!(name in process.env)) {
    console.log(`Warning: environment variable ${name} is not set`)
    return []
  }
  return String(process.env[name]).split(pattern).filter(s => s.length)
}
