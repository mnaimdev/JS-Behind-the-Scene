// while loop //
let dice = Math.trunc(Math.random() * 6 + 1);

while(dice !== 6) {
    console.log(`Rolling dice ${dice}`);
    dice = Math.trunc(Math.random() * 6 + 1);
    if (dice === 6) {
        console.log('Loop is about to end...');
    }
}

