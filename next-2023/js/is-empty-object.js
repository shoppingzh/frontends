function isCurrentObjectEmpty(o) {
  if (!o) return true
  const propNames = Object.getOwnPropertyNames(o)
  const symbolNames = Object.getOwnPropertySymbols(o)
  return !propNames.length && !symbolNames.length
}


function isEmptyObject(object) {
  let current = object
  while (current) {
    if (!isCurrentObjectEmpty(current)) {
      return false
    }

    current = Object.getPrototypeOf(current)
  }

  return true
}

console.log(isEmptyObject({})); // false
console.log(isEmptyObject(Object.create(null))); // true
console.log(isEmptyObject([])) // false

function Person(name) {
  this.name = name
}
Person.prototype.say = () => {
  console.log(`Hello, I'm ${this.name}`);
}
console.log(isEmptyObject(new Person('xpzheng'))); // false
