# Vue Intro

- Vue Basic Usage
- Vue basic Component
- Vue More ....
## Vue Basic Usage

- Vue instance
- Data binding
- Two Way Data binding
- **v** directive,v-if,v-binding,v-on ......

## Vue Basic Component

- How to add component into Vue
- Vue component: props and template

## Vue More .....

- Template: text/html attribute/javascript expression
- directive: parameter, binding parameter,follow example: bind data:**url** to html attribute **href**

```html
<a v-bind:href="url">...</a>
<a v-bind:[eventName]="doSomething" >
<form v-on:submit.prevent="onSubmit">...</form>
```

```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>
<!-- 缩写 -->
<a :href="url">...</a>
<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>
```

```html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>
<!-- 缩写 -->
<a @click="doSomething">...</a>
<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```
- computation properties
- 

## Vue Intro Reference

- [vue tutorial in scrimba](https://scrimba.com/p/pXKqta/cQ3QVcr)