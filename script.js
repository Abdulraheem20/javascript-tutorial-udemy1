/*
let js = "amazing";
let firstName = "Abdulraheem";
console.log(firstName);
*/
///////////////////////////////////////
/*
let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof "Shola");
*/

////////////////////////////////////////
//MATHS OPERATORS
// const now = 2037;
// const ageTaiwo = now - 1994;
// const ageKenny = now - 1994;
// const ageAde = now - 1999;
// const firstName = "Abdulraheem";
// const lastName = "Raimi";
// console.log(firstName + " " + lastName);
// //////ASSIGNMENT OPERATORS////////
// let x = 10 + 5; //15
// x += 10; //(x= x+10) .... 25
// x *= 4; //(x = x * 4) ... 100
// x++; //101
// x--; //100
// x--; //99
// x--; //98

////////COMPARISM OPERATORS///////////////
// console.log(ageTaiwo > ageKenny); // >, <, >=, <=;
// console.log(ageTaiwo >= ageKenny);
// const isFullAge = ageAde >= 18;
// const now = 2037;
// const ageTaiwo = now - 1994;
// const ageKenny = now - 1994;
// const ageAde = now - 1999;
// console.log(now - 1991 < now - 2018)

// let x, y;
// x = y = 25-10-5; // x = y = 10

// const averageAge = (ageAde + ageTaiwo / 2);
// console.log(ageTaiwo, ageAde, averageAge)

//////String and Template literals///////
const firstName = "Abdulraheem";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old' + job + '!';
console.log(jonas);





// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael','Peter','Steven'],
//     true
// ];
// let types = [];
// // console.log(jonas[0])
// // console.log(jonas[1])
// // ...
// // console.log(jonas[4])
// // jonas[5] does not exist

// for(let i = 0; i < jonas.length; i++){
//     // reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);
//     // filling types array
//     types[i] = typeof jonas[i];
//     //types.push(typeof jonas[i]);
// }
// console.log(types);
// let years = [1991, 2007, 1969, 2020];
// let ages = [];
// for (let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
//     //ages[i] = 2037 - years[i];
// }
// console.log(ages);
// // continue and break
// console.log('---- ONLY STRINGS ----')
// for(let i = 0; i < jonas.length; i++){
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);   
// }

// console.log('---- BREAK WITH NUMBER ----')
// for(let i = 0; i < jonas.length; i++){
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);   
// }

// reading an array backward
// 4, 3, ..., 0

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael','Peter','Steven'],
//     true
// ];
// console.log(jonas.length);
// for(let i = jonas.length - 1; i >= 0; i--){
//     console.log(i, jonas[i], typeof jonas[i]);
// }

// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`---- starting exercise ${exercise}----`);
//     for(let rep =1; rep< 6; rep++){
//         console.log(`Exercise ${exercise}: lifting weight repitition ${rep}`);
//     }
// }

////////////// WHILE LOOP  ///////////////
// for(let rep =1; rep <= 10; rep++){
//     console.log(`lifting weight repitition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: lifting weight repitition ${rep}`);
    rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice)
let arr = []
while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
} 
