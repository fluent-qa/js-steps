function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation() {
    // logic
    return 42;
}

async function run() {
    // logic
    console.log('Start!!')
    await promiseTimeout(2000);

    const response = await longRunningOperation();
    console.log(response);

    console.log('Stop!!');
}

run();


promiseTimeout(2000)
    .then(() => {
        console.log('Done!!');
        return promiseTimeout(1000);
    }).then(() => {
        console.log('Also done!!');
        return Promise.resolve(42);
    }).then((result) => {
        console.log(result);
    }).catch(() => {
        console.log('Error!');
    });


//     # Asynchronous code

// Modern app development involves communicating with other systems. These communications can take time, and can cause your application to pause unable to perform other operations.

// JavaScript is able to manage long running operations through the use of **promises**. A **promise** is similar to an [IOU](https://wikipedia.org/wiki/IOU); the code is promising it will let you know when it completes and execute the function you provide. You can use promises directly to specify how you want your code to respond when a call to a remote system returns.

// Recently, a new pattern has emerged. Building upon promises, `async`/`await` allows you to create code which looks synchronous yet is asynchronous. This helps make code more readable while still taking allowing for better performance.

// ## Further reading

// - [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
// - [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
// - [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
