const hello = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, babel!')
    }, 3000)
  })
}

class Person {
  constructor(name) {
    this.name = name
  }

  sayHello() {
    hello().then(word => {
      console.log(`${this.name} say: ${word}`)
    })
  }
}