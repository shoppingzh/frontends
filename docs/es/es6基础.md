## es6基础
***

### let与const
let与const关键字是es6重点中的重点，需要特别注意，由于var关键字具有**变量提升**的特性，所以不推荐在es6之后再使用，而let关键字才是js真正的变量声明关键字，使用let声明的变量会严格作用于`{}`所包含的作用域内。
至于const，如果用Java语言来定义类似于`final let a = 1`，当a声明后，不可以再次赋值，即作为一个常量使用。

***

### 箭头函数
```javascript
var add = (a, b) => {
    return a + b;
}
setTimeout(() => {
    add(1, 1);
})
```

***
### 对象字面量
```javascript
var a = "a", b = true, c = 1;
var o = {
    a,
    b,
    c,
    say(){
        console.info('nice')
    }
}
console.log(o)
```
> 控制台输出：`{a: "a", b: true, c: 1, say: ƒ}`

***

### 模板字符串
```javascript
var name = "laowang", age = 20;
var url = `http://www.example.com/search?name=${name}&age=${age}`;
console.log(url)
```
> 控制台输出："http://www.example.com/search?name=laowang&age=20"

***

### 函数默认值与可变参数
学过python的都知道函数默认值，这是一个非常好用的特性；函数的可变参数可参考Java。

为某个函数参数设定默认值：
```javascript
function divide(top, bottom = 1){
    return top / bottom;
}

console.info(divide(3));
```
> 控制台输出：3

该语法与python的默认值语法完全一致。

Java中可变参数的写法如下所示：
```java
public int sum(int... nums){
    int sum = 0;
    for(int num : nums){
        sum += num;
    }
    return sum;
}
```
以上例子在es6中是这样写的：
```javascript
function sum(...nums){
    var sum = 0;
    nums.forEach(num => {
        sum += num;
    })
    return sum;
}
console.info(sum(1, 1))
```
从以上例子可见，可变参数的语法格式与Java中完全一致（因为js是弱类型的，所以省略了类型，如果加上类型就编程了`function (var... nums)`

除了将多个变量组合为一个可变参数的数组外，还可以将数组**解构**（见高级篇）为多个变量，如下所示：
```javascript
var arr = [];
for(var i = 1; i <= 100;i++){
    arr.push(i);
}

function add(a, b, c){
    return a + b + c;
}
// 这里虽然传入了100个元素的数组，但是add函数只取了前3个
console.info(add(...arr))
```
> 控制台输出：6

***

### Unicode
Unicode = 全球化。以UTF-16为例，每一个字符的存储需要占据计算机两个字节的空间（在以前可以说是很奢侈，但随着计算机存储能力的提升，牺牲空间来换取全球化的支持是值得的），因此可以编码的字符很多，多到可以存储世界上所有国家的文字、字符，这样就形成了国际化。
本文不讨论Unicode的实现细节，只讨论Unicode在js中的应用，以一个中文的“你”字为例讲解：
```
console.log('你'.length)
console.log('你'.codePointAt(0))
```
> 控制台输出：1
> 20320

首先，为什么“你”字这个字符串的长度为1？
按照正常人的理解，“你”字是一个字符，自然长度为1，这没有问题。但是计算机所理解的字符串的长度是**计算机存储的字符的个数**，如果计算机（或虚拟机）不支持存储Unicode，那么其内部每个字符的长度就只能是1，这也是ASCII码与ISO-8859-1等编码的字符长度。

当你在js代码中输入`var str = '你'`时，你以为你输入的是“你”这个文字，但实际上输入的是这个字对应的Unicode编码，通过查表我们得知汉字“你”的编码是`\u4f60`即16进制的`0x4f60`，所以这行代码进一步被翻译为了`var str = '\u4f60'`，现在代码是有了，接下来js引擎解释执这折行代码时，需要为这个`str`对象分配内存，如果js引擎不支持Unicode那么它就解释不了`\u4f60`这个代码，那么它就只能按照它所理解的IOS-8859-1（可能是，具体不知道）的编码方式来理解这个代码，从而两个字节所组成的汉字被拆分成了2个1字节的西文字符，因此，计算机最后将这个“你”字认定为两个字符，这也就是为什么`'你'.length`在es6之前返回2的原因了。

那么，为什么`'你'.codePointAt(0)`返回的是一个奇怪的数字`20320`呢？其实这个20320并不奇怪，它正是16进制数`0x4f60`的10进制表达。

这个思路可以套用到一切编程语言中，编码知识是独立于所有计算机语言而存在的。理解计算机编码的原因，我们可以解决很多诸如编解码错误、显示奇怪字符等棘手问题。

***

### 模块化
见：[模块化](./模块化.md)
