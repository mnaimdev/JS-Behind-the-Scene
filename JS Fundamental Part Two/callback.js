// callback function //

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function juiceProcessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//     return juice;
// }

// const juiceMaker = juiceProcessor(3, 4);
// console.log(juiceMaker);

function calcAge(birthYear) {
    return 2022 - birthYear;
}

function yearsUntilRetirement(firstName, birthYear) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} has ${retirement} years of retirement`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

    
    
}

console.log(yearsUntilRetirement("Mohammad Naim", 1999));
console.log(yearsUntilRetirement("Md Salauddin", 1983));
console.log(yearsUntilRetirement("Brad Traversy", 1950));






// assignment //


// function percentageOfWorld(population) {
//     const populationPercent = (population / 9800) * 100;
//     return populationPercent;
// }

// function describePopulation(country, population) {

//     const percentage = percentageOfWorld(population);

//     const description = `${country} has ${population} million people, 
//     which is about ${percentage}% of the world.`;
//     return description;
// }

// console.log(describePopulation("Bangladesh", 160));
// console.log(describePopulation("India", 1200));
// console.log(describePopulation("China", 1441));
