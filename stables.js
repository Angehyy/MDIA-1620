//LESSON-3 Code
let horseName = "HorseMeat";
console.log(horseName);
let horseNickName = "Vegan"
console.log(horseNickName);
let horseAge = 10;
console.log(horseAge);
let isHorseInside = true;
console.log(isHorseInside);
console.log(horseAge);

//LESSON-4 Code
console.log(typeof 11150405);
const STABLE_MONTHLY_FEE = 115;
console.log(STABLE_MONTHLY_FEE); //uppercase is preferred

console.log(STABLE_MONTHLY_FEE * 3);
console.log(false + 2); //TYPE COERCION
console.log("THE MONTHLY STABLE FEE IS " + STABLE_MONTHLY_FEE);
console.log(horseName + " will be " + (horseAge +2) + " in 2 years");
console.log(horseName + " is serving cunt at the ripe age of " + horseAge + " being a brat is a mindset " + horseName + " is a brat and cunt");

//Week 4 Lab Here//
console.log(`my horse's name is ${horseName} their nickname is ${horseNickName}`);
console.log("Come stay with " + (horseName) + " A 10% discount is applied for every 3 month stay. Save $" + (STABLE_MONTHLY_FEE * 3) *.1);

// LESSON-5-Code
if (isHorseInside != true) {
    console.log (`${horseName} is out`);
} else {
    console.log (`${horseNickName} is inside the stable`);
}

//Lesson-6-Code
//Horse = ["name", age, isInside, "nickName"]
//horse names = Charlie, strawberry, beans

//let horseNames = [horseName, "Strawberry", "Beans"];
//let horseAges = [horseAge, 2, 10];
//let horseLocations = [isHorseInside, false, true];
//horseNames.push("Lettuce");
//console.log(horseNames[3]);
//console.log(`Please DO NOT interact with the ${horseNames.length} horses. ${horseNames} will bite.`);
//console.log(`${horseNames} are all gooners and will edge you. Especially ${horseName} since he's ${horseAge} years old.`);
//if (horseNames[0] === "HorseMeat") {
//    console.log("I love Horse Meat");
//}

//if (horseNames.length < 5);
//console.log("this place stinks!");

//Lab-6 Code
let horseNames = [horseName, "Muffy", "Mamoose"];
let horseAges = [horseAge, 20, 12];
let horseLocations = [isHorseInside, false, true];

let horse0Location;
if (horseLocations[0]) {
    horse0Location = horseNames[0] + " is inside";
} else {
    horse0Location = horseNames[0] + " is outside";
}

let horse1Location;
if (horseLocations[1]) {
    horse1Location = horseNames[1] + " is inside";
} else {
    horse1Location = horseNames[1] + " is outside";
}

let horse2Location;
if (horseLocations[2]) {
    horse2Location = horseNames[2] + " is inside";
} else {
    horse2Location = horseNames[2] + " is outside";
}
console.log (`Welcome to my Stables! There are ${horseNames.length} horses here. Their names are ${horseNames} and they are ${horseAges} years old. Right now ${horse0Location}, ${horse1Location}, ${horse2Location}. A 10% discount is applied for every 3 month stay. Save $ ${(STABLE_MONTHLY_FEE * 3) *.1}`);
