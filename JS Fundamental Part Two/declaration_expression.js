// function declaration //
// function calcAgeOne(birthYear) {
//     const age = 2022 - birthYear;
//     return age;
// }

// const yearOne = calcAgeOne(1999);
// console.log(yearOne);


// // function expression //
// const calcAgeTwo = function (birthYear) {
//     const age = 2022 - birthYear;
//     return age;
// }

// const yearTwo = calcAgeTwo(1999);
// console.log(yearTwo);


// assignment //
function percentageOfWorld1(population) {
    const populationPercent = (population / 7900) * 100;
    return populationPercent;
}


const percentageOfWorld2 = function (population) {
    const populationPercent = (population / 7900) * 100;
    return populationPercent;
}

const countryBangladesh = percentageOfWorld2(160);
const countryIndia = percentageOfWorld2(1200);
const countryChina = percentageOfWorld2(1441);

console.log(countryBangladesh.toFixed(2) + "%", countryIndia.toFixed(2) + "%", countryChina.toFixed(2) + "%");