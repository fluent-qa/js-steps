# Javascript Learning Notes
Javascript is used for interacting with browser at first.

- Javascript
  * Primitive
  * Variable
  * Types
  * Statements
  * Objects
- DOM
  * Html Objects and Methods
  * DOM Layout
  * DOM Event
  * DOM Style
  * DOM traverse
  * DOM load and Save
  * DOM validation
  * DOM Extension
- BOM: Browser Object Model
  * window APIs

## Javascript Basic

- Basic Syntax
- Variable
- Types

## Javscript Basic Syntax -1

- case sensitive for keywords,variable,function and all indentifier
- html is not case sensitive. Property onclick is same as onClick

## Javscript Syntax: literal values

```javsacript
"Hello World"   //string
123  // int
1.2 
true
false
/javascript/g1 // reg expression
null //null
[1,2,3,4,5,6] ; //list
{
        name: 'name',
        age : '20'
}; //object/map
//function
function hello(){
    console.log('Hello')
}
```

## Javscript Syntax: identifier

identifier: 变量，函数，属性或者函数的参数

```javascript
myName,v1235,$Test

function helloworld(){}
function sayTo(name){
    console.log(name);
}

```

## 关键字和保留字

Jascaript关键字和保留字：

``` javascript
break       delete      function    return      typeof
case        do          if          switch      var
catch       else        in          this        void
continue    false       instanceof  throw       while
debugger    finally     new         true        with
default     for         null        try
```


ECMAScript 还预定义了很多全局变量和函数，也应当避免把它们用作标识符：

``` javascript
arguments           Error           Math            RegExp
Array               eval            NaN             String
Boolean             EvalError       Number          SyntaxError
Date                Function        Object          TypeError
decodeURI           Infinity        parseFloat      undefined
decodeURIComponent  isFinite        parseInt        URIError
encodeURI           isNaN           RangeError
encodeURIComponent  JSON            ReferenceError
```

## Javascript Type: Type

JavaScript 中有5种简单数据类型(primitive type)
:

- `Undefined`
- `Null`
- `Boolean`
- `Number`
- `String` 

还有1种复杂数据类型 `Object`，`Object` 本质上是由一组无序的名值对组成的。JavaScript 不支持任何创建自定义类型的机制，所有值最终都将是上述6种数据类型之

下表给出了各种数据类型及其对应的转换规则。

| 数据类型      | 转换为true的值      | 转换为false的值 |
| --------- | -------------- | ---------- |
| Undefined | -              | undefined  |
| Null      | -              | null       |
| Boolean   | true           | false      |
| String    | 任何非空字符串        | ""（空字符串）   |
| Number    | 任何非零数字值（包括无穷大） | 0和NaN      |
| Object    | 任何对象           | -          |


## Javascript Type: Underfined
## Javascript Type: Null 
## Javascript Type: Number
## Javascript Type: Boolean 

## Javascript Type: Obejct

JavaScript 中所有对象都继承自 `Object` 类型，每个对象都具有下列基本的属性和方法：

- `constructor`：保存着用于创建当前对象的函数（构造函数）。
- `hasOwnProperty()`：用于检查给定的属性在当前对象实例中是否存在。
- `propertyIsEnumerable()`：用于检查给定的属性是否能够使用for-in语句来枚举。
- `isPrototypeOf()`：用于检查对象是否是传入对象的原型。
- `toString()` 方法：返回对象的字符串表示。
- `toLocaleString()`：返回对象的本地字符串表示。
- `valueOf()`：返回对象的字符串、数值或布尔值表示（通常与toString()方法的返回值相同）。

## Javascript Operator


| 运算符 | 操作 | A | N |
| --- | --- | --- | --- |
| `++` | 前/后增量 |  R | 1 |
| `--` | 前/后增量 | R | 1 |
| `-` | 求反 | R | 1 |
| `+` | 转换为数字 | R | 1 |
| `~`| 按位求反 | R | 1 |
| `!` | 逻辑非 | R | 1 |
| `delete` | 删除属性 | R | 1 |
| `typeof` | 检测类型 | R | 1 |
| `void` | 返回`undefined` | R | 1 |
|||||
| `*` `/` `%` | 乘，除，求模 | L | 2 | 
| `+` `-` | 加，减| L | 2 |
| `+` | 字符串连接 | L | 2 |
| `<<`  | 左移位 | L | 2 |
| `>>`  | 有符号右移 | L | 2 |
| `>>>` | 无符号右移 | L | 2 |
| `<` `<=` `>` `>=` | 比较数字顺序 | L | 2 |
| `<` `<=` `>` `>=` | 比较字母顺序 | L | 2 |
| `instanceof` | 测试对象类 | L | 2 |
| `in` | 测试属性是否存在 | L | 2 |
|||||
| `==` | 判断相等 | L | 2 |
| `!=` | 判断不等 | L | 2 |
| `===` | 判断恒等 | L | 2 |
| `!==` | 判断恒不等 | L | 2 |
| `&` | 按位与 | L | 2 |
|||||
| `^` | 按位异或 | L | 2 |
| `┃` | 按位或 | L | 2 |
|||||
| `&&` | 逻辑与 | L | 2 |
|||||
| `┃┃` | 逻辑或 | L | 2 |
| `?:` | 条件运算符 | R | 3 |
|||||
| `=` | 赋值 | R | 2 |
| `*=` `/=` `%=` <br> `+=` `-=` `&=` <br>  `<<=` `>>=` <br> `^=` `┃=` `>>>=` | 运算且赋值 | R | 2 |
|||||
| `,` | 忽略第一个操作数，<br> 返回第二个操作数  | L | 2 |

## Javascript: delete

## Javascript: void
## Javascript: equals ==/===/!=/!==

``` javascript
null == undefined   // true
"NaN" == NaN        // false
5 == NaN            // false
NaN == NaN          // false
NaN != NaN          // true
false == 0          // true
true == 1           // true
true == 2           // false
undefined == 0      // false
null == 0           // false
"5" == 5            // true
```

## Javascript: in
## Javascript: instanceof
## Javascript: statement

| 语句 | 语法 | 用途 |
| --- | --- | --- |
| `break` | `break [label];` | 退出最内层循环或者退出 `switch` 语句，又或者退出 `label` 指定的语句 |
| `case` | `case expression:` | 在 `switch` 语句中标记一条语句 |
| `continue` | `continue [label];` | 重新开始最内层的循环或重新开始 `label` 指定的循环 |
| `debugger` | `debugger;` | 断点器调试 |
| `default` | `default;` | 在 `switch` 中标记默认的语句 |
| `do-while` | `do statement while(expression);` | `while` 循环的一种替代形式 |
| `empty` | `;` | 什么都不做 |
| `for` | `for(init;expr;incr) statement` | 简写的循环结构 |
| `for-in` | `for(var in object) statement` | 遍历一个对象的属性 |
| `function` | `function name([param[],...])`<br>`{statement}` | 声明一个函数 |
| `if-else` | `if (expression) statement1`<br>`[else statement2]` | 执行 `statement1` 或者 `statement2` |
| `label` | `label:statement` | 给 `statement` 指定一个名字 `label` |
| `return` | `return [expression];` | 从函数返回一个值 |
| `switch` | `switch(expression){statement}` | 用 `case` 或者 `default` 语句标记的多分支语句 |
| `throw` | `throw expression;` | 抛出异常 |
| `try` | `try {statement}`<br>`[catch {handler statement}]`<br>`[finally {cleaup statement}]` | 捕获异常 |
| `use strict` | `"use strict"` | 对脚本和函数应用严格模式 |
| `var` | `var name=[=expr][,...];` | 声明并初始化一个或多个变量 |
| `while` | `while(expression) statement` | 基本的循环结构 |
| `with` | `with(object) statement` | 扩展作用域链 |

## Javascript: Object

- property object
    * 可写（writable attribute），表明是否可以设置该属性的值。
    * 可枚举（enumerable attribute），表明是否可以通过 `for-in` 循环返回该属性。
    * 可配置（configurable attribute），表明是否可以删除或修改该属性。

- object attribute
    * 内置对象（native object），是由 JavaScript 规范定义的对象或类。例如，数组、函数、日期和正则表达式都是内置对象。
    * 宿主对象（host object），是由 JavaScript 解释器所嵌入的宿主环境（比如 Web 浏览器）定义的。客户端 JavaScript 中表示网页结构的 HTMLElement 对象均是宿主对象。
    * 自定义对象（user-defined object），是由运行中的 JavaScript 代码创建的对象。
    * 自有属性（own property），是直接在对象中定义的属性。
    * 继承属性（inherited property），是在对象的原型对象中定义的属性。

## Javascript closure 闭包

- scope: local/global
- closure: visit private viarable by returned function

[closure](https://coolshell.cn/articles/6731.html)

## Javascript this:

* 有对象就指向调用对象
* 没调用对象就指向全局对象
* 用new构造就指向新对象
* 通过 apply 或 call 或 bind 来改变 this 的所指。