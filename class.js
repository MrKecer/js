class Person {
    constructor(name, surname, age, birthOfDay) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.birthOfDay = birthOfDay;
    }
    get calculateAge() {
        return 2023 - this.birthOfDay;
    }
}

let user = new Person("Yusuf ", "Keçer", "23123", 1973);

console.log(user.calculateAge);

class Man extends Person {
    constructor(name, surname, age, birthOfDay, tc, hairColor) {
        super(name, surname, age, birthOfDay);
        this.tc = tc;
        this.hairColor = hairColor;
    }
}



let user2 = new Man("asdfas", "asdfasdf", 14, 1992, "213122132132332", "black");
console.log(user2.name);