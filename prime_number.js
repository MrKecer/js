let number = prompt("Kontrol etmek istediğiniz değeri giriniz");
let mid = Math.floor(number / 2);

primeNumber();

function primeNumber() {
    let isPrime = true;
    for (let i = 2; i <= mid; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }


    }
    isPrime ? document.write("Asal") : document.write("Asal değil");
}

