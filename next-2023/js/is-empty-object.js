function isCurrentObjectEmpty(o) {
  if (!o) return true
  const propNames = Object.getOwnPropertyNames(o)
  const symbolNames = Object.getOwnPropertySymbols(o)
  return !propNames.length && !symbolNames.length
}


function isEmptyObject(object) {
  let current = object
  while (current) {
    if (isCurrentObjectEmpty(current)) {
      return true
    }

    current = Object.getPrototypeOf(current)
  }

  return false
}

console.log(isEmptyObject({}));
console.log(isEmptyObject(Object.create(null)));
