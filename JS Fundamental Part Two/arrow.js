// arrow function //
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years!`;
}

console.log(yearsUntilRetirement(1999, "Mohamamd Naim"));
console.log(yearsUntilRetirement(1996, "Jamilur Rahman"));


// assignment //
const percentageOfWorld3 = population => (population / 7900) * 100;

const countryBangladesh = percentageOfWorld3(160);
const countryIndia = percentageOfWorld3(1200);
const countryChina = percentageOfWorld3(1441);

console.log(countryBangladesh.toFixed(2) + "%", countryIndia.toFixed(2) + "%", countryChina.toFixed(2) + "%");