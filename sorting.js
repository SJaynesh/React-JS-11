const arr1 = [10, 20, 30]; // 6000
const arr2 = [40, 55, 60];

const [a, b, c] = arr2;

const objA = { a: 1, b: 2 }
const objB = { c1: 10, d1: 20 }

const { c1, d1 } = objB;

// Spreading Operator (...)
const marge = [...arr1, ...arr2];

const margeObj = { ...objA, ...objB };

console.log(marge);
console.log(margeObj);

console.log(a, b, c)
console.log(c1, d1)

const ans = arr1.map(val => val * 2);

console.log(ans);

const evenArr = arr2.filter(val => val % 2 == 0)

console.log(evenArr);

// const sum = arr1.reduce((a, b) => a * b)
let sum = 1;
for (let i = 0; i < arr1.length; i++) {
    sum *= arr1[i];
}

console.log(sum); // 60


