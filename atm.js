/*
1-money görüntüleme
2-Para çekme 
3-Para yatırma
4-Çıkış

ATM UYGULAMASI
*/
let newLine = "\r\n";
let money = 1000;


let value = "1-money Görüntüleme " + newLine
    + "2-Para Çekme" + newLine
    + "3-Para Yatırma" + newLine
    + "4-Çıkış" + newLine
    + "Lütfen bir değer seçiniz.";

// alert(value);

let select = prompt(value);
switch (select) {
    case "1":
        alert("bakiyeniz : " + money);
        break;

    case "2":
        let withDrawMoney = Number(prompt("Çekmek istediğiniz tutarı giriniz :"));
        if (withDrawMoney < money) {
            //başarılıdır
            money = money - withDrawMoney;
            alert("Kalan money : " + money);
        } else {
            alert("bakiyenizden fazla para çekemezsiniz!" + newLine
                + "bakiyeniz : " + money + " " + "Cekilecek Tutar : " + withDrawMoney);
        }
        break;

    case "3":
        let depositMoney = Number(prompt("Yatırılacak tutarı giriniz :"));
        money = money + depositMoney;
        alert("Güncel bakiyeniz : " + money);
        break;

    case "4":
        alert("Sistemden çıkış yapılmıştır...");
        break;

    default:
        alert("Lütfen 1 - 4 arasında değer giriniz !");
        break;

}
