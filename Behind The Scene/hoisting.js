// Hoisting //



// example 1 //
console.log(name);
console.log(age);
console.log(profession);


var name = 'Mohammad Naim';
let age = 24;
const profession = 'Full Stack Software Engineer';

// example 2 //


console.log(calc(2, 3));
console.log(calcEx(5, 6));
console.log(calcArr(5, 9));
console.log(newFunc);
console.log(newFunc(5, 1));

function calc(a, b) {
    return a + b;
}

const calcEx = function(a, b) {
    return a + b;
}

let calcArr = (a, b) => a + b;

var newFunc = (a, b) => a - b;


// example 3 //


var productPrice = 100;

if (!productPrice) deleteProduct();



function deleteProduct() {
    console.log('product has been deleted!');
}

var x = 2;
let y = 4;
const z = 7;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(window);