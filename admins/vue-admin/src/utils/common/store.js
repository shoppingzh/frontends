const NAMESPACE = 'xp_'

function getKey(key) {
  return NAMESPACE + key
}

export function setItem(key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(getKey(key), value)
}

export function getItem(key) {
  const value = window.localStorage.getItem(getKey(key))
  return JSON.parse(value)
}

export function removeItem(key) {
  window.localStorage.removeItem(getKey(key))
}
