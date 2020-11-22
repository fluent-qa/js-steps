const p1 = new Promise((resolve, reject) => {
    console.log("create promis successfully");
    resolve("resolve")
})

console.log("after new promise")

const p2 = p1.then(data => {
    console.log(data + " from p1")
    throw new Error("p2 failed")
})

const p3 = p2.then(data => {
    console.log("sucess", data)
}, err => {
    console.log("error", err.message)
    console.log("error", err)
})
/**
 * 
 * 首先我们在调用 Promise 时，会返回一个 Promise 对象。
构建 Promise 对象时，需要传入一个 executor 函数，Promise 的主要业务流程都在 executor 函数中执行。
如果运行在 excutor 函数中的业务执行成功了，会调用 resolve 函数；如果执行失败了，则调用 reject 函数。
Promise 的状态不可逆，同时调用 resolve 函数和 reject 函数，默认会采取第一次调用的结果。


 * 以上简单介绍了 Promise 的一些主要的使用方法，结合 Promise/A+ 规范，我们可以分析出 Promise 的基本特征：

promise 有三个状态：pending，fulfilled，or rejected；「规范 Promise/A+ 2.1」
new promise时， 需要传递一个executor()执行器，执行器立即执行；
executor接受两个参数，分别是resolve和reject；
promise 的默认状态是 pending；
promise 有一个value保存成功状态的值，可以是undefined/thenable/promise；「规范 Promise/A+ 1.3」
promise 有一个reason保存失败状态的值；「规范 Promise/A+ 1.5」
promise 只能从pending到rejected, 或者从pending到fulfilled，状态一旦确认，就不会再改变；
promise 必须有一个then方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled, 和 promise 失败的回调 onRejected；「规范 Promise/A+ 2.2」
如果调用 then 时，promise 已经成功，则执行onFulfilled，参数是promise的value；
如果调用 then 时，promise 已经失败，那么执行onRejected, 参数是promise的reason；
如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 then 的失败的回调onRejected；
 */

const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class SelfPromise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;

        // 存放成功的回调 - for async requests
        this.onResolvedCallbacks = [];
        // 存放失败的回调
        this.onRejectedCallbacks = [];

        let resolve = (value) => {
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        }
        // 调用此方法就是失败
        let reject = (reason) => {
            // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        }
        try {
            // 立即执行，将 resolve 和 reject 函数传给使用者  
            executor(resolve, reject)
        } catch (error) {
            // 发生异常时执行失败逻辑
            reject(error)
        }
    }

    // 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected
    then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
            onFulfilled(this.value)
        }

        if (this.status === REJECTED) {
            onRejected(this.reason)
        }
        if (this.status === PENDING) {
            // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
            this.onResolvedCallbacks.push(() => {
                onFulfilled(this.value)
            });

            // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            })
        }
    }
}

const promise = new SelfPromise((resolve, reject) => {
    resolve('成功');
}).then(
    (data) => {
        console.log('success', data)
    },
    (err) => {
        console.log('faild', err)
    }
)

const asyncPromise = new SelfPromise((resolve, reject) => {
    // 传入一个异步操作
    setTimeout(() => {
        resolve('async 成功');
    }, 1000);
}).then(
    (data) => {
        console.log('success', data)
    },
    (err) => {
        console.log('faild', err)
    }
)

//https://zhuanlan.zhihu.com/p/183801144