
// Welcome!
//                            _(\_/) 
//                           ,((((__\
//                          (((    6 \ 
//                        ,(((   ,    \
//                      ,((((   /"._   `.
//                     ,((((   /    `-.-'

//------------------------- Setting up shop -------------------------//

let horses = [] ;
let visitorMessage = "Welcome to my Stable!";
let lateFee = 50;
let availableStalls = 5;
//------------------------- First day -------------------------//

// Using a constructor, to add horses
function HorseConstructor(name, nickname, favoriteTreat, age, monthlyRent, location, hairColor, favLimb) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age; 
    this.monthlyRent = monthlyRent; 
    this.location = location;
    this.hairColor = hairColor;
    this.favLimb = favLimb; 
}
 this.introduce = function () {
    return `${visitorMessage} meet ${this.name}, also known as ${this.nickname}. His favorite treat is ${this.favoriteTreat}, and he's ${this.age} years old.`;
};
 this.rentalStatus = function () {
    const locationStatus = this.location ? "inside the stable" : "outside in the pasture";
    return `${this.name} is currently located ${locationStatus}, paying $${this.monthlyRent} in monthly rent.`;
};
this.toggleLocation = function () {
    this.location = !this.location;
    const newLocation = this.location ? "inside" : "outside";
    console.log(`${this.name} has been moved ${newLocation}.`);
}
horses.push(new HorseConstructor("HorseMeat", "Vegan", "Beef", 19, 20, true, "pink", "feet"));
horses.push(new HorseConstructor("Isaac", "Ho", "anything", 20, 100, false, "black", "toes"));
horses.push(new HorseConstructor("rico", "ma", "anabolic ice cream", 20, 5, true, "brown", "nipples"));

console.log("Horses in the stable:");
horses.forEach((horse) => {
    console.log(horse.introduce());
    console.log(horse.rentalStatus());
});

let newHorse = new HorseConstructor("Honk", "ZZZ", "melatonin", 50, 1, true, "yellow", "fingers");
horses.push(newHorse);

console.log("Updated list of horses in the stable:");
horses.forEach((horse) => {
    console.log(horse.introduce());
    console.log(horse.rentalStatus());
});

horses.forEach((horse) => {
    horse.isHungry = true; 
});

console.log("horses with hunger status:");
horses.forEach((horse) => {
    console.log(`${horse.name} is ${horse.isHungry ? "hungry" : "not hungry"}.`);
});

//---------------------- Growing business ----------------------//

//how many stalls using math variables
availableStalls = availableStalls- horses.length;
console.log(`There are currently ${availableStalls} stall(s) available`);

//if, else statement for if available stalls < 2
if (availableStalls < 2) {
    console.log ("We need to build more stalls");
} else  {
    console.log (`We have ${availableStalls} left`);
}

//function logged out and invoking it
function calculateLateFee(horse) {
    const totalDue = horse.monthlyRent + lateFee;
    console.log (`${horse.name} owes $${totalDue} if rent is late.`);
}

horses.forEach((horse) => calculateLateFee(horse));

//loop to check horse treats. Exits when found.
function ifHorseLikesTreat (treat) {
    for (let i = 0; i < horses.length; i++ ) {
        if (horses[i].favoriteTreat === treat) {
            console.log (`${horses[i].name} likes ${treat}`);
            break;
        } else {
            console.log(`${horses[i].name} does not like ${treat}.`);
        }
    }
}
ifHorseLikesTreat("anabolic ice cream");

//invoking function that returns nickname of horse, returns value outside function
function getHorseNickname(horseName) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].name === horseName) {
            return horses[i].nickname;
        }
    }
    return `I don't know who ${horseName} is.`;
}
const horseNickName = getHorseNickname("Isaac");
console.log(`This horses nickname is ${horseNickName}`);

//------------------------- Day to day operations -------------------------//

//invoking conditional function 
function checkFavLimb(limb) {
    let foundHorse = null;

    if (horses.some((horse) => horse.favLimb === limb)) {
        foundHorse = horses.find((horse) => horse.favLimb === limb);
        return `${foundHorse.name} loves ${limb}`;
    } else {
        return `No horse in the stable seems to like ${limb}`;
    }
}
const result = checkFavLimb("toes");

console.log(result);

//function moving horses outside
function horseLocation() {
    horses.forEach((horse) => {
        horse.location = false;
    });
    console.log("All horses went to touch grass and spend time in the sun!");
}

horseLocation();
//Horse Location Updated ;-;
horses.forEach((horse) => {
    const location = horse.location ? "inside" : "outside";
    console.log(`${horse.name} is ${location}.`);
});

// loop that moves horses inside if they are outside, and vice versa.

function HorseConstructor(name, nickname, favoriteTreat, age, monthlyRent, location, hairColor, favLimb) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.location = location;
    this.hairColor = hairColor;
    this.favLimb = favLimb;

    this.introduce = function () {
        return`${visitorMessage} meet ${this.name}, also known as ${this.nickname}. Their favourite treat is ${favoriteTreat}, they are currently ${this.age} years old.`;
    };
    this.rentalStatus = function() {
        const locationStatus = this.location ? "inside the stable" : "outside in the sun";
        return `${this.name} is currently ${locationStatus} the stable, their monthly debt is ${monthlyRent}`;
    };
    this.toggleLocation = function () {
        this.location = !this.location;
        const newLocation = this.location ? "inside" : "outside";
        console.log(`${this.name} has been moved ${newLocation}.`);
    };
}

// Feed horses
console.log("Feeding all horses...");
function feedHorses() {
    horses.forEach((horse) => {
        if (!horse.location) {
            console.log(`${horse.name} is outside. Calling them in...`);
            horse.toggleLocation();
        }
    });
    horses.forEach((horse) => {
        console.log(`${horse.name} is happily eating their favorite treat: ${horse.favoriteTreat}.`);
    });
    console.log("All horses have been fed!");
}
feedHorses();
function BedtimeLocation(dark) {
    horses.forEach((horse) => {
        if (!horse.location) {
            horse.toggleLocation();
            console.log("Horses are INSIDE!!");
        } 
    });
}
BedtimeLocation();

