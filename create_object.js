function Object(name, age) {
    console.log(this);
    if (!(this instanceof Object)) {
        return new Object(name, age);
    }
    this.age = age;
    this.name = name;
}
Object.prototype.getName = function () {
    return this.age;
}

let createPerson = new Object("Yusuf", 22);
console.log(createPerson.getName());
console.log(createPerson.salary);
console.log(createPerson.name);
let createPerson2 = new Object("Can ", 23);
console.log(createPerson2.name, createPerson2.age);
console.log(createPerson2.getName());