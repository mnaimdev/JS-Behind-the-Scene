// object method //
// const people = {
//     name: "Mohammad Naim",
//     hasDriversLicense: false,
//     birthYear: 1999,
//     job: "Programmer",
//     calcAge: function() {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     }
// }

// console.log(people.calcAge());


// const jonas = {
//     firstName: "Jonas",
//     job: "Teacher",
//     hasDriversLicense: true,
//     birthYear: 1991,
//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function() {
//        return `${this.firstName} is a ${this.calcAge()}- year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//     }
// }

// console.log(jonas.calcAge());

// console.log(jonas.age);

// console.log(jonas.getSummary());

// assignment //
const myCountry = {
    country: "Bangladesh",
    capital: "Dhaka",
    language: "Bangla",
    population: 160,
    neighbours: ["India", "Mayanmar", "Nepal"],
    describe: function() {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    },
    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());