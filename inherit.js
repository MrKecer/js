function Person(name) {
    this.name = name;
}
Person.prototype.get = function () {
    console.log(this.name);
}

function Teacher(branch, name) {
    Person.call(this, name);
    this.branch = branch;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.getBranch = function () {
    console.log(this.branch);
}
let person = new Teacher("English", "Jhon");
person.getBranch();