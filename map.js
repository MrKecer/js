let map = new Map();
map.set(07, "Antalya");
map.set(06, "Ankara");
map.set(34, "İstanbul");
map.set([1, 2, 3, 4], "Kıbrıs");
console.log(map.get(07));
console.log(map.get([1, 2, 3, 4]));//reference 
for (const [key, val] of map) {
    console.console.log(key, " ", va);
}