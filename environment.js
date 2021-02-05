export default {
  parseBool: name => {
    if (!(name in process.env)) console.log(`Warning: environment variable ${name} is not set`)
    return String(process.env[name]).toLowerCase() === 'true'
  },

  parseFloat: (name, ifNaN) => {
    if (!(name in process.env)) console.log(`Warning: environment variable ${name} is not set`)
    const x = Number.parseFloat(process.env[name])
    return Number.isNaN(x) ? ifNaN : x
  }
}
