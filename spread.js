let numbers = [12, 32, 43, 14, 54];
let numbers2 = [32, 43, ...numbers];
console.log(numbers);
let numbers3 = [numbers[0] > numbers2[0] ? numbers[0] : numbers2[0]];
console.log(numbers3);