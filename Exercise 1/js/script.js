const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift();



console.log(fruits);
fruits.sort();
console.log(fruits);

fruits.push("Kiwi");

let AppleIndex = fruits.indexOf("Apples");

if (AppleIndex !== -1) {
    fruits.splice(AppleIndex, 1);
}

console.log(fruits);

fruits.reverse();

console.log(fruits);
