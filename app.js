//Beden kitle Endeksi hesaplama


let kilo = Number(prompt("Kilonuzu giriniz"));

let size = Number(prompt("Boyunuzu metre cinsinden giriniz"));

let result = kilo / (size ** 2);

if (result < 18.5) {
    console.log("İdeal kilonun altında" + result);
} else if (result >= 18.5 && result <= 24.9) {
    console.log("İdeal kilonun altında" + result);
} else if (result >= 25 && result <= 29.9) {
    console.log("deal kiloda" + result);
} else if (result >= 30 && result <= 39.9) {
    console.log("İdeal kilonun çok üstünde (obez)" + result);
} else if (result >= 40) {
    console.log("İdeal kilonun çok üstünde (morbid obez)" + result);
}
