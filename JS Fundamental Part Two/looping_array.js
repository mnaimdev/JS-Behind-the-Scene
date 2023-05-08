// Looping thorugh arrays //
// const person = [
//     'Mohammad Naim',
//     'Developer',
//     2022 - 1999,
//     'Programmer',
//     ['Backend', 'Full Stack', 'Frontend'],
//     false,
// ];

// const refOfPerson = [];
// for (let i = 0; i < person.length; i++) {
//     // Filling array
//     // refOfPerson[i] = typeof person[i];
//     refOfPerson.push(typeof person[i]);
// }
// console.log(refOfPerson);

// const years = [1999, 2004, 2019, 2022];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// console.log('---CONTINUE STATEMENT---');
// for (let i = 0; i < person.length; i++) {
//     if (typeof person[i] !== 'string') {
//         continue;
//     }
//     console.log(person[i]);
// }

// console.log('---BREAK STATEMENT---');
// for (let i = 0; i < person.length; i++) {
//     if (typeof person[i] !== 'string') {
//         break;
//     }
//     console.log(person[i]);
// }

// Assignment //

const populations = [160, 1200, 1440, 400];
const percentages2 = [];

function percentageOfWorld1(population) {
    let perc = (population / 7900) * 100;
    let percentages = perc.toFixed(2);
    return percentages;
}


for (let i = 0; i < populations.length; i++) {
    let perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc + "%");
}
console.log(percentages2);