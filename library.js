

let books = [];

let book1 = {
    title: "İnsan Ne ile Yaşar",
    author: "Tolstoy",
    price: 20,
    code: "4.1.shelf"
}

let book2 = {
    title: "Hiçbir Karşılaşma Tesadüf Değildir",
    author: "Hakan Mengüç",
    price: 58,
    code: "3.5.shelf"
}

let book3 = {
    title: "Hayat Kaybettiğin Yerden Başlar",
    author: "Miraç Çağrı Aktaş",
    price: 27,
    code: "1.3.shelf"
}

let book4 = {
    title: "Her Şeyi Düşünme",
    author: "Anne Bogel",
    price: 34,
    code: "1.4.shelf"
}

let book5 = {
    title: "Dikili İlişkiler",
    author: "Haluk Tatar",
    price: 17,
    code: "4.2.shelf"
}
books.push(book1);
books.push(book2);
books.push(book3);
books.push(book4);
books.push(book5);


let shelf11 = { code: "1.1.shelf", rendered: false }
let shelf12 = { code: "1.2.shelf", rendered: false }
let shelf13 = { code: "1.3.shelf", rendered: false }
let shelf14 = { code: "1.4.shelf", rendered: false }
let shelf15 = { code: "1.5.shelf", rendered: false }

let shelf21 = { code: "2.1.shelf", rendered: false }
let shelf22 = { code: "2.2.shelf", rendered: false }
let shelf23 = { code: "2.3.shelf", rendered: false }
let shelf24 = { code: "2.4.shelf", rendered: false }
let shelf25 = { code: "2.5.shelf", rendered: false }

let shelf31 = { code: "3.1.shelf", rendered: false }
let shelf32 = { code: "3.2.shelf", rendered: false }
let shelf33 = { code: "3.3.shelf", rendered: false }
let shelf34 = { code: "3.4.shelf", rendered: false }
let shelf35 = { code: "3.5.shelf", rendered: false }

let shelf41 = { code: "4.1.shelf", rendered: false }
let shelf42 = { code: "4.2.shelf", rendered: false }
let shelf43 = { code: "4.3.shelf", rendered: false }
let shelf44 = { code: "4.4.shelf", rendered: false }
let shelf45 = { code: "4.5.shelf", rendered: false }

let shelf51 = { code: "5.1.shelf", rendered: false }
let shelf52 = { code: "5.2.shelf", rendered: false }
let shelf53 = { code: "5.3.shelf", rendered: false }
let shelf54 = { code: "5.4.shelf", rendered: false }
let shelf55 = { code: "5.5.shelf", rendered: false }



let shelfs = [
    [shelf11, shelf12, shelf13, shelf14, shelf15],
    [shelf21, shelf22, shelf23, shelf24, shelf25],
    [shelf31, shelf32, shelf33, shelf34, shelf35],
    [shelf41, shelf42, shelf43, shelf44, shelf45],
    [shelf51, shelf52, shelf53, shelf54, shelf55]];

shelfs = shelfs.reverse();

let line = "";
createShelfs();

function createShelfs() {
    console.clear();
    for (let i = 0; i < shelfs.length; i++) {
        for (let j = 0; j < shelfs[i].length; j++) {
            line += "| " + (shelfs[i][j].rendered ? shelfs[i][j].code : "---") + " ";
        }
        console.log(line);
        console.log("-------------------------");
        line = "";
    }
}



let selectBook = prompt("Kitap ismi giriniz");

books.forEach(book => {
    if (book.title.toUpperCase().includes(selectBook.toUpperCase(), 0)) {
        findBook(book.code);
    }
});

function findBook(code) {
    for (let a = 0; a < shelfs.length; a++) {
        for (let b = 0; b < 5; b++) {
            if (shelfs[a][b].code == code) {
                shelfs[a][b].rendered = true;
                createShelfs();
            }

        }
    }
}

