
let Object1 = function (firstName, lastName, birthDay) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthOfDay = birthDay;

}

let Job = function (firstName, lastName, birthDay, wage) {
    Object1.call(this, firstName, lastName, birthDay);
    this.wage = wage;
}

//inherit prototype
Job.prototype = Object.create(Object1.prototype);
//Job constructor

Job.prototype.contructor = Job;

Object1.prototype.calculateAge = function () {
    return 2023 - this.birthOfDay;
}
// Object.prototype.getName = function () {
//     var funcNameRegex = /function (.{1,})\(/;
//     var results = (funcNameRegex).exec((this).constructor.toString());
//     return (results && results.length > 1) ? results[1] : "";
// };
// let person = new Object("Yusuf", "Keçer", "1945");
// console.log(person.lastName);
// let personAge = person.calculateAge();
// console.log(personAge);
let employee = new Job("Yusuf", "Keçer", "2022", "2017");
console.log(employee.firstName);
console.log(employee.calculateAge());