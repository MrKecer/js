//midtermExam=%40 final=%60 
//passing grade= 60 
//conditional passing grade=50

let midtermExam = Number(prompt("Vize notu giriniz"));
let final = Number(prompt("final notu girini5051z"));
document.write(midtermExam, "<br>");
document.write(final, "<br>");
let average = midtermExam * 0.4 + final * 0.6;
console.log(average);
document.write(average, "<br>");
if (!(average < 50)) {
    if (average >= 60) {
        console.log("koşulsuz geçti");
        document.write("koşulsuz geçti", "<br>");
    } else {
        console.log("koşullu geçti");
        document.write("koşullu geçti", "<br>");
    }
} else {
    console.log("kaldı");
    document.write("kaldı", "<br>");
}