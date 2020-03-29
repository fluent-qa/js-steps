"use strict";
class Student {
    constructor(firstName, //must be public
    middlerName, lastName) {
        this.firstName = firstName;
        this.middlerName = middlerName;
        this.lastName = lastName;
        this.fullName = firstName + "." + middlerName + "." + lastName;
    }
}
function hello(person) {
    console.log("hello " + person.firstName);
}
let student = new Student("KK", "MM", "LL");
hello(student);
// document.body.textContent="hello world!"
