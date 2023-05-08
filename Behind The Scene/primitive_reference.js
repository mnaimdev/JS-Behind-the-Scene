// primitive types
// let a = 10;
// let b = a;
// a = 11;

// console.log(a);
// console.log(b);


// reference types

// const person = {
//     name: 'Mohammad Naim',
//     age: 24,
//     profession: 'Software Engineer',
// }


// const faisal = person;
// faisal.age = 27;

// console.log(person);
// console.log(faisal);

// faisal = {};

// shallow copy

const person = {
    name: 'Mohammad Naim',
    age: 24,
    profession: 'Software Engineer',
    money: [1000, 2000],
}

const newObject = Object.assign({}, person);
newObject.salary = 40000;

newObject.money.push(4000);
newObject.money.push(3000);

console.log(person);
console.log(newObject);


// For deep cloning of any object we lo-Dash library later in the section