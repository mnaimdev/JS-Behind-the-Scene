// function //

// example one //
function juiceProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `We use ${apples} apples & ${oranges} oranges`;
    return juice;
}

const appleOrangeJuice = juiceProcessor(3, 4);
console.log(appleOrangeJuice);

console.log(juiceProcessor(12, 5));

const num = Number("23");
console.log(num);

console.log(Number("23"));


// example two //
function number(str) {
    return Number(str);
}

const value = number("25");
console.log(value);

console.log(number("34"));


// assignment //
function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
}

const descFinland = describeCountry("Finland", 6, "Helsinki");
const descBangladesh = describeCountry("Bangladesh", 160, "Dhaka");
const descUSA = describeCountry("USA", 46, "New York");

console.log(descFinland + "\n" + descBangladesh + "\n" + descUSA);


