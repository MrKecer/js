//let palindrome = prompt("Polidrom olup olmadığını test etmek istediğiniz isimi giriniz");
let isPolidrome = true;
let palindrome = "kecer";
// palindromeFunction();
// function palindromeFunction() {
//     let reversePalindrome = [];
//     for (let i = palindrome.length - 1; i >= 0; i--) {
//         reversePalindrome.push(palindrome[i]);
//     }

//     for (let index = 0; index < palindrome.length; index++) {
//         console.log(palindrome[index] + " " + reversePalindrome[index])
//         if (palindrome[index] != reversePalindrome[index]) {
//             isPolidrome = false;
//break;
//         }
//     }

//     if (isPolidrome == true) {
//         console.log("polidrom");
//     } else {
//         console.log("polidrom değil");
//     }
// }

palindrome1();
function palindrome1() {

    var len = palindrome.length;
    var mid = Math.floor(len / 2);

    for (var i = 0; i < mid; i++) {
        console.log(palindrome[len - 1 - i]);
        if (palindrome[i] !== palindrome[len - 1 - i]) {
            console.log("polidrom değil");
            return;
        }
    }

    console.log("polidrom");
}