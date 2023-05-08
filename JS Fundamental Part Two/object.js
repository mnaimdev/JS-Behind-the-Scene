// object literal //

// const person = {
//     firstName: "Mohammad",
//     lastName: "Naim",
//     age: 23,
//     job: "Programmer",
//     friends: ["Saiful", "Biplob", "Latif", "Sohan"]
// }

// console.log(person.firstName);
// console.log(person["lastName"]);

// const nameKey = "Name";
// console.log(person["last" + nameKey]);


// const interestedIn = prompt("What are you interested in Mohammad Naim? Choose firstName, lastName, age, job or friends ):");

// if (person[interestedIn]) {
//     console.log(person[interestedIn]);
//     console.log(person[interestedIn][1]);
// } else {
//     console.log("Wrong Request! Choose firstName, lastName, age, job or friends ):")
// }

// person.location = "Dhaka";
// person["work"] = "Web Development";

// console.log(person);

// const jonas = {
//     friends: ["Michael", "John", "Steven"],
// }

// console.log(`${person.firstName} ${person.lastName} has ${person.friends.length} friends, and his best friend is called ${person.friends[1]}`)


// assignment //
const myCountry = {
    country: "Bangladesh",
    capital: "Dhaka",
    language: "Bangla",
    population: 160,
    neighbours: ["India", "Mayanmar", "Nepal"]
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} -speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry);
myCountry["population"] -= 2;
console.log(myCountry);
