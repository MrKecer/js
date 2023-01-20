
let number = "370";
let result = 0;
for (let i = 0; i < number.length; i++) {
    let value = number.charAt(i);
    console.log(value);
    result += value * value * value;
    console.log(result);
}
if (result == Number(number)) {
    console.log("armstrong");

} else {
    console.log("armstrong değil")
}