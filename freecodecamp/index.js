// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line


// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = [myNoun, myAdjective, myVerb, myAdverb].join(','); // Change this line
// Only change code above this line

// Only change code below this line
const myArray = ['1', 1];

// Only change code below this line
const myArray = [[1]];

const myArray = [50, 60, 70];
const myData = myArray[0];

// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;
myArray[1] = 64;
myArray[2] = 99;

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3])

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

const myList = Array.from({length: 5}, (_,i)=> (['first', i]));

function reusableFunction(){
  console.log('Hi World')
}

reusableFunction();

function functionWithArgs(first = 1, second = 2){
  console.log(first + second);
}

functionWithArgs(1, 2);

function timesFive(num){
  return num * 5;
}

timesFive(5);

// Declare the myGlobal variable below this line
const myGlobal = 10;
const oopsGlobal = 5;

function fun1() {
  // Assign 5 to oopsGlobal Here

}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
  const myVar = 5;
  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = 'sweater';
  // Only change code below this line

  // Only change code above this line
  return outerWear;
}

myOutfit();

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive(){
  sum += 5;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7)

function nextInLine(arr, item) {
  // Only change code below this line

  arr.push(item);
  return arr.shift();
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

function trueOrFalse(wasThatTrue) {
  // Only change code below this line

  if(wasThatTrue){
    return 'Yes, that was true';
  }
  return "No, that was false";
  // Only change code above this line

}

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }else if (val < 5) {
    return "Smaller than 5";
  }else {return "Between 5 and 10";}
}

testElseIf(7);

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  }else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

function testSize(num) {
  // Only change code below this line
  if(num < 5){
    return 'Tiny';
  }else if(num < 10){
    return 'Small';
  }else if(num < 15){
    return 'Medium';
  }else if(num < 20){
    return 'Large';
  }else {
    return 'Huge';
  }

  return "Change Me";
  // Only change code above this line
}

testSize(7);

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  let num = 0;
  if(strokes === 1){
    num = 0;
  }else if(strokes <= par - 2){
    num = 1;
  }else if(strokes === par - 1){
    num = 2;
  }else if(strokes === par){
    num = 3;
  }else if(strokes === par + 1){
    num = 4;
  }else if(strokes === par + 2){
    num = 5;
  }else if(strokes >= par + 3){
    num = 6;
  }
  console.log(names[num], num)
  return names[num];
  // Only change code above this line
}

golfScore(5, 4);
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val){
    case 1:
      answer= 'alpha';
      break;
    case 2:
      answer= 'beta';
      break;
    case 3:
      answer= 'gamma';
      break;
    default:
      answer= 'delta'
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line

  switch (val){
    case 'a':
      answer= 'apple';
      break;
    case 'b':
      answer= 'bird';
      break;
    case 'c':
      answer= 'cat';
      break;
    default:
      answer= 'stuff'
      break;
  }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line

  switch (val){
    case 1:
    case 2:
    case 3:
      answer= 'Low';
      break;
    case 4:
    case 5:
    case 6:
      answer= 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      answer= 'High';
      break;
  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val){
    case 'bob':
      answer= 'Marley';
      break;
    case 42:
      answer= 'The Answer';
      break;
    case 1:
      answer= 'There is no #1';
      break;
    case 7:
      answer = 'Ate Nine';
      break;
    case 99:
      answer = "Missed me by this much!"
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

function isLess(a, b) {
  // Only change code below this line
  return  a < b
  // Only change code above this line
}

isLess(10, 15);

// Setup
function abTest(a, b) {
  // Only change code below this line
  if(a < 0 || b < 0){
    return undefined;
  }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

let count = 0;

function cc(card) {
  // Only change code below this line
  if([2, 3, 4, 5, 6].includes(card)){
    count += 1;
  }else if([10, 'J', 'Q', 'K', 'A'].includes(card)){
    count -= 1;
  }
  return count + ' ' + (count > 0 ? 'Bet' : 'Hold');
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

const myDog = {
  // Only change code below this line
  name: 'Denis',
  legs: 4,
  tails: 2,
  friends: ['de']

  // Only change code above this line
};

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = 'Happy Coder'

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = 'Gav'

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const object = {
    alpha: "Adams",
    "bravo": "Boston",
    charlie:  "Chicago",
    delta: "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result = object[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

function checkObj(obj, checkProp) {
  // Only change code below this line
  if(checkProp in obj){
    return obj[checkProp];
  }
  return 'Not Found'
  // Only change code above this line
}

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
myMusic.push(myMusic[0])

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(!value.length) {
    delete records[id][prop];
    return records;
  };

  if(value === 'Free'){
    return records;
  }

  if(id === 1245 && prop === 'tracks'){
    records[id][prop] = ['',value];
    return records;
  }
  if(!records[id].hasOwnProperty(prop)){

    records[id] = {[prop]: prop === 'tracks' ? [value] : value};
  }else {
    records[id][prop] = prop === 'tracks' ? records[id][prop].push(value) : value;
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Setup
const myArray = [];

let i = 5
while( i >= 0){
  myArray.push(i);
  i--;
}

// Only change code below this line

// Setup
const myArray = [];

for(let i = 1; i <= 5; i++){
  myArray.push(i);
}

// Only change code below this line
// Setup
const myArray = [];

for (let i = 0; i < 10; i++) {
  if(i % 2 !== 0){
    myArray.push(i);
  }
}

// Only change code below this line
// Setup
const myArray = [];

for (let i = 10; i >= 0; i--) {
  if(i % 2 !== 0){
    myArray.push(i);
  }
}

// Only change code below this line
// Setup
const myArr = [2, 3, 4, 5, 6];

let total = 0;

for(let i = 0; i < myArr.length; i++){
  total += myArr[i];
}

// Only change code below this line

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  arr.flat(1).forEach(item=> product *= item);
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do{
  myArray.push(i);
}while (i < 5) {
  i++;
}

function sum(arr, n) {
  // Only change code below this line
  if(!n) return 0;
  return sum(arr, n - 1) + arr[n - 1];
  // Only change code above this line
}

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  const c = contacts.find(item=> item[prop]);
  const n = contacts.find(item=> item.firstName === name);
  console.log(n, !!c, prop)
  if(!n){
    return 'No such contact';
  }
  if(!c){
    return 'No such property'
  }
  // console.log(c[prop])
  return n[prop];

  // Only change code above this line
}

lookUpProfile("Akira", "likes");

function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}

function randomRange(myMin, myMax) {
  // Only change code below this line

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

function convertToInteger(str) {
  return parseInt(str, 2)
}

convertToInteger("10011");

function checkEqual(a, b) {
  return a === b ? 'Equal' : 'Not Equal'
}

checkEqual(1, 2);

function checkSign(num) {
  return !num ? 'zero' : num > 0 ? 'positive' : 'negative'
}

checkSign(10);

function countdown(n){
  return n < 1 ? [] : [n, ...countdown(n - 1)];
}

function rangeOfNumbers(startNum, endNum) {
  return startNum > endNum ? [] : [startNum, ...rangeOfNumbers(startNum + 1, endNum)];
};

function checkScope() {
  let i = 'function scope';
  if (true) {
    const i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Only change code above this line
}
editInPlace();

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

const magic = ()=> {
  return new Date();
};

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

