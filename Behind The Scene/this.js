// // 'use strict';

// // // console.log(this);


// // const myFuncEx = function (birthYear) {
// //     console.log(2037 - birthYear);
// //     console.log(this);
// // }

// // // myFuncEx(1999);


// // const myFuncArr = birthYear => {
// //     console.log(2023 - birthYear);
// //     console.log(this);
// // }

// // // myFuncArr(1999);


// // const person = {
// //     name: 'Mohammad Naim',
// //     year: 1999,
// //     calcAge: function (currentYear) {
// //         console.log('Age is : ', currentYear - this.year);
// //         console.log(this);
        
// //     }
// // }

// // // person.calcAge(2023);

// // const x = {
// //     year: 1996,
// // }

// // x.calcAge = person.calcAge;

// // // x.calcAge(2037);


// // const y = person.calcAge;
// // y(2050);



// // Difference between Arrow and Regular Function //


// const person = {
//     firstName: 'Mohammad Naim',
//     birthYear: 1999,
//     calcAge: function (currentYear) {
//         console.log(currentYear - this.birthYear);
        
//         // const self = this;
    
//         // const myFunc = function () {
//         //     // console.log(this.birthYear);
//         //     // console.log(this);
//         //     console.log(self.birthYear);
//         // }
//         // myFunc();

//         const myArrFunc = () => {
//             console.log(this.birthYear);
//         }
//         myArrFunc();
//     },

//    calcNewAge:  (currentYear) => {
//         console.log(this);
//         console.log(currentYear - this.birthYear);
//     },
// }

// // person.calcAge(2023);
// // person.calcNewAge(2023);


// // Arguments Object //

// const regularFunc = function (a, b) {
//     console.log(arguments);
//     return a + b;
// }

// // regularFunc(3, 5);


// const ArrowFunc = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }

// ArrowFunc(3, 5);