let binary = "";
let decimal = 15;

while (true) {
    binary += (decimal % 2).toString();
    decimal = Math.floor(decimal / 2);
    if (decimal == 1) {
        binary += 1;
        break;
    }


}
let result = binary.split("").reverse().join("");
console.log(result);