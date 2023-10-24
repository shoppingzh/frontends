function Animal(name) {
  this.name = name
}
Animal.prototype.eat = function() {
  console.log(`${this.name} eat`)
}

function Dog(name, age) {
  Animal.call(this, name)
  this.age = age
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.bark = function() {
  console.log(`${this.name} bark!`)
}

const dog = new Dog('Didi', 5)
console.log(dog.age)
dog.eat()
dog.bark()
