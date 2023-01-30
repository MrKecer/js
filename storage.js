//local browser depolama alanı tarayıcıya kaydedilir
//session storage tarayıcı kapanınca silinir.
//değerler numeric olarak değil string olarak atanır
sessionStorage.setItem("Hello", "mehaba");

sessionStorage.setItem("merhaba", "hi");
sessionStorage.removeItem("hello");
let result = sessionStorage.getItem("merhaba");
if (result == null) {
    console.log("bulunamadı");
} else {
    console.log(result);
}

let list = [123, 34, 213, 4324, 1232];
for (let i = 0; i < list.length; i++) {
    sessionStorage.setItem(i, JSON.stringify(list[i]));

}
