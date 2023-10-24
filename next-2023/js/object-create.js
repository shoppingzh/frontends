function create(object) {
  function F() {}
  F.prototype = object
  return new F()
}

function create2(object) {
  const o = {}
  Object.setPrototypeOf(o, object)
  return o
}