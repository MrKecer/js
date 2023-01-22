let number = 28;
let mid = Math.floor(number / 2);
isPrefect = checkPerfectNumber(number);
isPrefect ? console.log("Mükemmel sayı") : console.log("Mükemmel sayı değil");;


function checkPerfectNumber(number) {
    let holdStep = 0;
    for (let i = 0; i <= mid; i++) {
        console.log(i);
        if (number % i == 0) {
            holdStep += i;
        }
    }
    if (holdStep % number == 0) {
        return true;
    }
}