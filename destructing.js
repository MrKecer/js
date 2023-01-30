// let a = [1, 2, 3, 4];
// var b;
// var c;
// var d;
// var e;
// var [b, c, d, e] = a;
// console.log(b, c, d, e);


const func = (value1, value2) => {

    let sub = value1 - value2;
    let add = value1 + value2;
    let division = value1 / value2;
    let multip = value1 * value2;
    let list = [sub, add, division, multip];
    return list;
}
[a, b, c, d] = func(10, 5);
console.log(a, b, c, d);