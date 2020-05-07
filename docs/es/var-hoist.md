## 什么是变量提升？
```js
console.log(a) // undefined
var a = 3;
```
以上代码中，`console.log(a)`执行到的地方，虽然变量`a`尚未被声明，但是却是可以正常运行的。因为变量提升的存在，在执行时，上述代码其实变成了这样：
```js
var a;
console.log(a);
a = 3;
```

## 注意事项
因为变量提升的存在，将作用域内需要使用的变量提前声明是一个好习惯，否则可能发生无法预期的错误，如：
```js
var b = 3;
(function() {
    console.log(b) // undefined
    var b = 'hello';
})();
```
同样，因为变量提升的存在，在`(function() {})`的局部作用域内，变量`b`被提升，所以执行时，代码变成了这样：
```js
var b = 3;
(function() {
    var b;
    console.log(b)
    b = 'hello';
})();
```

因此，提升声明好需要使用的变量是一个好的习惯。

## 禁止变量提升
只要使用`var`声明的变量都会发生变量提升，好消息是es6的`let`、`const`所声明的变量不会发生提升。如果尝试提前使用由`let`、`const`声明的变量时，将会发生如下错误：
```js
console.log(c) // Uncaught ReferenceError: Cannot access 'c' before initialization
let c = 50;
```

*tips：虽然通过`let`、`const`声明的变量不会提升，但其实与我们的预期也有所不同，因为变量没有提升，所以很容易想到的是如果提前使用未声明的变量，应该发生未定义错误，但其实结果并不是，而是发生了不能在初始化前访问变量的错误。*
