# Learning Typescript 
- Installation and Hello World
- Compile/Run ts file
- Project Stucture

## 1. 快速上手- Hello World

- Hello World

```js
function greeter(person:string){
    return "hello "+ person
}

console.log(greeter('world!'))
```
-----

## 2. 编译运行typescript

```sh
tsc greeter.ts  ## a js file generated
node greeter.js ## run he js file
```
------

## 3. ts常见项目结构

```sh
projectRoot
├── src
│   ├── file1.js
│   └── file2.js
├── built
└── tsconfig.json
```

