// Nested Loop //
const person = [
    'Mohammad Naim',
    23.5,
    'Programmer',
    ['coder', 'developer', 'backend'],
];

for (let i = person.length - 1; i >= 0; i--) {
    console.log(person[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---Starting Exercise ${exercise} ---`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

// Assignment //
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

const newArray = [];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`${listOfNeighbours[i][y]}`);
    }
}
console.log(newArray);