let students = [];

let colorsArray = ["red", "orange", "blue"];

let lottoNums = [12, 45, 3, 54, 99];

let mixedValues = ["Hey", 98, true, null];

// modifing an array
let colors = ["bla", "pink", "red", "orange"];

// every element has corresponding number to it
// which we can use to modify or do different stuff
// with it
colors[0] = "blue";
console.log(colors);

let days = ["Monday", "Tuesday", "Wednesday"];

console.log(days[2]); // "Wednesday"

console.log(days[89]); // "Undefined"

// update another day in days array
days[3] = "Thursday";

console.log(days);

const restDays = ["Friday", "Saturday", "Sunday"];

const allDays = days.concat(restDays);

console.log(allDays);

// push() method  , add element to the end of the array
days.push("Friday"); // returns the new length of the array

console.log(days.length);

console.log(days.pop()); //return the last elemnt and remove from array

days.shift();

console.log(days);
// days.unshift
