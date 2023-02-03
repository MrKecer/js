const person = {
    firstName: "yusuf",
    lastName: "Keçer",

}
Object.defineProperties(person, {
    fullName: {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
            const values = value.split(" ");
            this.firstName = values[0];
            this.lastName = values[1];
        }
    }
});
Object.defineProperties(person, {
    age: {
        value: 50
    }
});
person.fullName = "asdsds sdfsdfkeçer";

console.log(person.firstName);
//backtick altgr+virgül
