import { env, emitWarning } from 'process'

export function parseBool (name) {
  if (env.NODE_ENV !== 'production' && !(name in env)) emitWarning(`environment variable ${name} is not set`)
  return String(env[name]).toLowerCase() === 'true'
}

export function parseInt (name, ifNaN) {
  if (env.NODE_ENV !== 'production' && !(name in env)) emitWarning(`environment variable ${name} is not set`)
  const x = Number.parseInt(env[name])
  return Number.isNaN(x) ? ifNaN : x
}

export function parseInts (name, pattern = /[^0-9-]+/) {
  if (!(name in env)) {
    if (env.NODE_ENV !== 'production') emitWarning(`environment variable ${name} is not set`)
    return []
  }
  return String(env[name]).split(pattern).map(s => Number.parseInt(s)).filter(Number.isInteger)
}

export function parseFloat (name, ifNaN) {
  if (env.NODE_ENV !== 'production' && !(name in env)) emitWarning(`environment variable ${name} is not set`)
  const x = Number.parseFloat(env[name])
  return Number.isNaN(x) ? ifNaN : x
}

export function parseList (name, pattern = /\W+/) {
  if (!(name in env)) {
    if (env.NODE_ENV !== 'production') emitWarning(`environment variable ${name} is not set`)
    return []
  }
  return String(env[name]).split(pattern).filter(s => s.length)
}
