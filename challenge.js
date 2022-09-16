// JavaScript Fundamentals – Part 1 //
///// Coding Challenge 1 /////

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// BMI = mass/height**2
//data type1
let johnBMI = (78/(1.69 ** 2));
console.log(johnBMI.toFixed(2));
let markBMI = (92/(1.95 ** 2));
console.log(markBMI.toFixed(2));
let markHigherBMI = (johnBMI > markBMI);
console.log(markHigherBMI);

//data type2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

johnBMI = (95/(1.88 ** 2));
console.log(johnBMI.toFixed(2));
markBMI = (85/(1.76 ** 2));
console.log(markBMI.toFixed(2));
markHigherBMI = (johnBMI > markBMI);
console.log(markHigherBMI);


///// Coding Challenge 2 /////
/// No 1///
if (johnBMI > markBMI){
    console.log("John's BMI is higher than Mark's!")
} else{
    console.log("Mark's BMI is higher than John's!")
}
/// No 2///
if (johnBMI > markBMI){
    console.log(`John's BMI (${(johnBMI.toFixed(2))}) is greater than Mark's BMI (${markBMI.toFixed(2)})!`)
} else{
    console.log(`Mark's BMI (${(markBMI.toFixed(2))}) is greater than John's BMI (${johnBMI.toFixed(2)})!`)
}

///// Coding Challenge 3 /////
/////// NO 1 ///////
const averageDolphinScores = (96 + 108 + 8) / 3;
console.log(averageDolphinScores.toFixed(4));

const averageKoalasScores = (88 + 91 + 110) / 3;
console.log(averageKoalasScores.toFixed(4));

/////// NO 2 ///////
if (averageDolphinScores > averageKoalasScores){
    console.log(`Team Dolphins wins with a total point of (${averageDolphinScores.toFixed(4)})scores.`);
} else if (averageKoalasScores > averageDolphinScores){
    console.log(`Team Koalas  wins with a total point of (${averageKoalasScores.toFixed(4)} )scores.`);
} else {
    console.log(`Both teams have a draw, with a total point of (${averageDolphinScores.toFixed(4)} )scores for Team Dolphin and a total point of (${averageKoalasScores.toFixed(4)}) scores for Team Koalas. Hence, there's no winner!`);
}

/////// BONUS NO 1 ///////
const bonusDolphinScore = (97 + 112 + 101) / 3;
console.log(bonusDolphinScore.toFixed(4));

const bonusKoalasScore = (109 + 95 + 123) / 3;
console.log(bonusKoalasScore.toFixed(4));

const minimumScore = 100;
if (minimumScore == 100){
    if (bonusDolphinScore > minimumScore && bonusDolphinScore > bonusKoalasScore){
        console.log(`Team Dolphins wins with a total point of (${bonusDolphinScore.toFixed(4)})scores.`);
    } else if(bonusKoalasScore > minimumScore && bonusKoalasScore > bonusDolphinScore){
        console.log(`Team Koalas  wins with a total point of (${bonusKoalasScore.toFixed(4)})scores.`)
    } else {
        console.log(`Both teams have a draw, with a total point of (${bonusDolphinScore.toFixed(4)} )scores for Team Dolphin and a total point of (${bonusKoalasScore.toFixed(4)}) scores for Team Koalas. Hence, there's no winner!`)
    };
} else{
    console.log(`No team wins the trophy`)
};


/////// BONUS NO 2 ///////
const bonusDolphinScore2 = (97 + 112 + 101) / 3;
console.log(bonusDolphinScore2.toFixed(4));

const bonusKoalasScore2 = (109 + 95 + 106) / 3;
console.log(bonusKoalasScore2.toFixed(4));

if (minimumScore == 100){
    if (bonusDolphinScore2 > minimumScore && bonusDolphinScore2 > bonusKoalasScore2){
        console.log(`Team Dolphins wins with a total point of (${bonusDolphinScore2.toFixed(4)})scores.`);
    } else if(bonusKoalasScore2 > minimumScore && bonusKoalasScore2 > bonusDolphinScore2){
        console.log(`Team Koalas  wins with a total point of (${bonusKoalasScore2.toFixed(4)})scores.`)
    } else {
        console.log(`Both teams have a draw, with a total point of (${bonusDolphinScore2.toFixed(4)} )scores for Team Dolphin and a total point of (${bonusKoalasScore2.toFixed(4)}) scores for Team Koalas. Hence, there's no winner!`)
    };
} else{
    console.log(`No team wins the trophy`)
};


///// Coding Challenge 4 /////
//// N0 1 /////
const bill = 275;
bill >= 50 && bill <= 300? tip = (bill * 0.15): tip = (bill * 0.2)
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

const bill2 = 40;
bill2 >= 50 && bill2 <= 300? tip = (bill2 * 0.15): tip = (bill2 * 0.2)
console.log(`The bill was ${bill2}, the tip was ${tip}, and the total value is ${bill2 + tip}`);

const bill3 = 430;
bill3 >= 50 && bill3 <= 300? tip = (bill3 * 0.15): tip = (bill3 * 0.2)
console.log(`The bill was ${bill3}, the tip was ${tip}, and the total value is ${bill3 + tip}`);


// JavaScript Fundamentals – Part 2 //

///// Coding Challenge #1 /////

// const average = ((44 + 23 + 71)/3);
// const calcAverage = average(((a + b + c)/3)) => {
//     return average;
// } 

/*
const calcAverage = function(a, b, c){
    const average = ((a + b + c)/3);
    return average;
};*/


// const checkWinner1 = function (a, b) {
//     a >= (2 *b)? console.log(`Dolphins win (${a} vs ${b})`): a >= (2 * b)? console.log(`Koalas  win (${b} vs. ${a} )`) //console.log(`There is no winner!`);
//     //return winner;
// }
// console.log(checkWinner1(avgDolphin, avgKoala));


const calcAverage = (a, b, c) => (a + b + c)/3;

let scoreDolphin = calcAverage(44, 23, 71);

let scoreavgKoala = calcAverage(65, 54, 49);

console.log(scoreDolphin, scoreavgKoala);

const checkWinner = function (avgDolphin, avgKoala){
    let winner;
    if (avgDolphin >= 2 *avgKoala){
        console.log(`Dolphins win (${avgDolphin} vs ${avgKoala})`)
    } else if (avgKoala >= 2 * avgDolphin){
        console.log(`Koalas  win (${avgKoala} vs. ${avgDolphin} )`)
    } else{
        console.log(`No team wins!`)
    }
    return winner;
};
(checkWinner(scoreDolphin, scoreavgKoala));
(checkWinner(200, 500));

scoreDolphin = calcAverage(85, 54, 41);

scoreavgKoala = calcAverage(23, 34, 27);

console.log(scoreDolphin, scoreavgKoala);
checkWinner(scoreDolphin, scoreavgKoala);

///// Coding Challenge #2 /////
