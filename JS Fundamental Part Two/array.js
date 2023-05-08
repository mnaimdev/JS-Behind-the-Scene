// array literal //

// const friends = ["Saiful", "Tuhin", "Rasel", "Shoyab"];

// console.log(friends[friends.length - 1]);

// const myFriend = new Array("Saiful", "Tuhin", "Rasel", "Shoyab", 3, 54);

// console.log(myFriend[myFriend.length - 1]);

// friends[0] = "Mohammad Naim";
// console.log(friends);


// const name = "Mohammad Naim";
// const friendList = ["Saiful", "Tuhin", "Rasel", "Shoyab", name, 2022 - 1999, friends];
// console.log(friendList);



// const years = [2007, 2008, 2009, 1999];

// function calcAge(birthYear) {
//     return 2022 - birthYear;
// }


// const age = [calcAge(years[2]), calcAge(years[years.length - 1])];
// console.log(age);


// assignment //

// const percentageOfWorld = (population) => (population / 7900) * 100;

// const populations = [1441, 160, 1200, 8.6];
// console.log(populations.length === 4);

// const percentages = [
//     percentageOfWorld(populations[0]),
//     percentageOfWorld(populations[1]), 
//     percentageOfWorld(populations[2]), 
//     percentageOfWorld(populations[populations.length - 1])];

// console.log(percentages);

// array methods //

// const name = ["Saiful", "Tuhin", "Rasel", "Shoyab"];
// const newLength = name.push("Mohammad Naim");
// const newArray = name.unshift("Mortoza");
// console.log(newArray, newLength);

// name.pop();
// const a = name.pop();
// name.shift();
// name.shift();
// console.log(name);

// console.log(name.indexOf("Rakib"));
// console.log(name.indexOf("Tuhin"));
// console.log(name.includes("Tuhin"));
// console.log(name.includes("Rakib"));

// if (name.includes("Tuhin")) {
//     console.log("Tuhin is here");
// }

// assignment //

const neighbours = ["Bangladesh", "India", "Pakistan", "Mayanmar"];

neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D");
}

let index = neighbours.indexOf("India");
neighbours[index] = "Republic of Sweden";
console.log(neighbours);