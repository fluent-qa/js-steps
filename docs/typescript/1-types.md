
## 2. 快速上手 - Type annotation

使用类型注解，可以编译时发现错误：

```js
function greeter(person: string){
    return "hello "+person
}

console.log(greeter('world'))
console.log(greeter([0,1,2]))  // 类型错误，编译时报错
```

错误信息：

```sh
Argument of type 'number[]' is not assignable to parameter of type 'string'.
6 console.log(greeter([0,1,2]))
```
-----

## 3.快速上手 - interface

两个类型相互兼容，如果内部的结构一样

```javascript
interface Person {
    firstName: string,
    lastName: string
}

```
------

