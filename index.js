console.log("Hello React JS");

/*
    Array : Collection of multiple element/values of multiple datatypes.

    index is must bes start from 0 (Zero);

    Array Types :
        1. 1D Array

            syntax : const arrayName = [elements];

        2. Multi Dimetional Array
*/

// index =>    0   1   2   3   4
const array1 = [89, 63, 12, 47, 56];

const ans = new Array(89, 63, 12, 47, 56)
// const array2 = [110, 120, 130, 140, 150];


// const array3 = array1.concat(array2);

// for (let e of array1) {
//     console.log(e * e);
// }

for (const index in array1) {
    console.log(array1[index]);

}

const sorting = (a, b) => a - b;

array1.sort(sorting)


console.log(array1.reverse());
