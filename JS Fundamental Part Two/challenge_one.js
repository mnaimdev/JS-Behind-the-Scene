// coding challenge one //

const calcAverage = (a, b, c) => (a + b + c) / 3;

// const averageDolphins = calcAverage(44, 23, 71);
// const averageKoalas = calcAverage(65, 54, 49);

const averageDolphins = calcAverage(85, 54, 41);
const averageKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolhins, avgKoalas) {

    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`); 
    } 
    
    else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolhins} )`); 
    } 
    
    else {
        console.log("No one have won the game!");
    }
}



checkWinner(averageDolphins, averageKoalas);