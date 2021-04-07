var hello = function () {
  console.log('hello, babel!');
};

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    hello();
  }

}