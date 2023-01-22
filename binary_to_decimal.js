let binary = "1011010111";
let result = 0;
const constant = 2;
binary = binary.split("").reverse().join("");

for (let i = 0; i < binary.length; i++) {

    let value = binary.charAt(i);
    result += (constant ** i) * value;

}
console.log(result);