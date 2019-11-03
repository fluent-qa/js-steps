interface Person {
    firstName: string,
    lastName: string
}


class Student {
    fullName: string;
    constructor(public firstName: string, //must be public
        public middlerName: string,
        public lastName: string) {
        this.fullName = firstName + "." + middlerName + "." + lastName
    }
}

function hello(person: Person) {
    console.log("hello " + person.firstName)
}

let student = new Student("KK", "MM", "LL")
hello(student);

// document.body.textContent="hello world!"