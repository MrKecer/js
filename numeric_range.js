var num = {
    min: 30,
    max: 50,
    checkRange: function (params) {
        if (typeof params !== "number") {
            console.log("sayı değil");
            return;
        }
        else {
            return params >= this.min && params <= this.max;
        }
    }
}
console.log(num.checkRange(30));
// aynı fonksiyon farklı obje için kullanılabiliyor
var num2 = {
    min: 40,
    max: 60
};
console.log(num.checkRange.call(num2, 35));