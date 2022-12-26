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

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

const sum = (...args) => args.reduce((a, b) => a += b, 0)

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
const {today, tomorrow} = HIGH_TEMPERATURES

// Only change code above this line

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const {today: {low:lowToday, high: highToday}} = LOCAL_FORECAST

// Only change code above this line

let a = 8, b = 6;
// Only change code below this line

[a, b] = [b, a];

function removeFirstTwo(list) {
  // Only change code below this line
  const [,,...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({min, max}) => (max + min) / 2.0;
// Only change code above this line

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  arr.forEach(item=> failureItems.push(`<li class="text-warning">${item}</li>`))
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender
  };
  // Only change code above this line
};

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

// Only change code below this line
class Vegetable{
  constructor(name){
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// Only change code below this line
class Thermostat{
  constructor(temperat){
    this._temperature = 5/9 * (temperat - 32);
  }
  get temperature(){
    return this._temperature;
  }

  set temperature(temp){
    this._temperature = temp;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString, lowercaseString};

// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

export default function subtract(x, y) {
  return x - y;
}

const makeServerRequest = new Promise((resolve, reject)=>{

})

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
}).then((result)=> console.log(result));

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
}).catch(error=> console.log(error));

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

function findOdd(A) {
  const counter = A.reduce((acc, item)=> {

//     if(item >= 0){
    acc[item] =  acc[item] + 1 || 1;
//     }

    return acc
  },{})
  return Number(Object.keys(counter).filter(item=> counter[item] % 2 !== 0)[0] || 0);
}

function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

function findMultiples(integer, limit) {
  return Array.from({length: Math.floor(limit / integer)}, (_, i)=> integer + (integer * i))
}

function duplicateEncode(word){
  const w = word.toLowerCase();
  return w.split('').map((item, i, arr)=> arr.filter(l=> item === l).length > 1 ? ')' : '(').join('')
}

function XO(str) {
  const s = str.toLowerCase().split('');
  if(s.every(item => !/x|o/.test(item))){
    return true;
  }
  return s.filter(item => item === 'x')?.length === s.filter(item => item === 'o')?.length
}

function rgb(r, g, b) {
  const detect = (n)=> Math.max(Math.min(n, 255), 0)

  return ((1 << 24) + (detect(r) << 16) + (detect(g) << 8) + detect(b)).toString(16).slice(1).toUpperCase();
}

function howManyDalmatians(number) {
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  return number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number === 101 ? dogs[3] : dogs[2]));
}
// SELECT * FROM companies
// ORDER BY employees DESC
// SELECT INITCAP(CONCAT(firstname, ' ', lastname)) AS shortlist
// FROM elves
// WHERE firstname LIKE '%tegil%' OR lastname LIKE '%astar%';

// SELECT people.*, COUNT(toys.*) as toy_count FROM people
// JOIN toys ON people.id = toys.people_id
// GROUP BY people.id, people.name

// SELECT id, name
// FROM departments d
// WHERE id IN (SELECT department_id
// FROM sales
// WHERE price >= 98.00);

// SELECT
// RANK() OVER (ORDER BY SUM(points) DESC) AS rank,
//   COALESCE(NULLIF(clan, ''), '[no clan specified]') AS clan,
//   SUM(points) as total_points,
//   COUNT(name) as total_people
// FROM people
// GROUP BY clan;
//
// SELECT
// DATE(s.transaction_date) AS day,
//   d.name AS department,
//   COUNT(s.id) AS sale_count
// FROM department d
// JOIN sale s ON d.id = s.department_id
// GROUP BY d.name, day
// ORDER BY DAY ASC

// SELECT age, COUNT(*) as total_people FROM people
// GROUP BY age
// HAVING COUNT(*) >= 10

// SELECT d.*
// FROM departments d
// WHERE EXISTS (SELECT s.* FROM sales s WHERE s.department_id = d.id AND s.price > 98.00)

function removeParentheses(s){
  const l = s.replace(/\(.+\)/,'');
  if(!l.length) return '  ';
  return s.replace(/\(.+\)/,'');
}

function deleteNth(arr,n){
  let checkN = {}
  return arr.reduce((acc, item)=> {
    if(checkN[item] === undefined || checkN[item] < n){
      acc.push(item);
    }
    checkN[item] = checkN[item] >= 0 ? checkN[item] + 1 : 1;
    return acc;
  },[])
}

function firstNonRepeatingLetter(s) {
  const arrayS = s.toLowerCase().split('');
  const obj = {};
  arrayS.forEach((item, index)=> {
    obj[item] = {count: obj[item]?.count + 1 || 1, index}
  });
  const char = Object.keys(obj).filter(item=> obj[item].count === 1).shift();
  if(char === undefined) return '';
  return char;
}

function firstNonRepeatingLetter(s) {
  const arrayS = s.toLowerCase().split('');
  const obj = {};
  arrayS.forEach((item, index)=> {
    obj[item] = {count: obj[item]?.count + 1 || 1, index}
  });
  const char = Object.values(obj).filter((item)=> item.count === 1).shift()
  if(char?.index === undefined) return '';
  return s[char.index];
}

Array.prototype.square = function() {
  return this.map(val => Math.pow(val, 2));
};

Array.prototype.cube = function() {
  return this.map(val => Math.pow(val, 3));
};

Array.prototype.average = function() {
  return this ? this.sum() / this.length : NaN;
};

Array.prototype.sum = function() {
  return this.reduce((acc, curr) => acc + curr, 0);
};

Array.prototype.even = function() {
  return this.filter(val => val % 2 === 0);
};

Array.prototype.odd = function() {
  return this.filter(val => val % 2 === 1);
};

function convertSpecialChars(input) {
  return input.replace(/[^a-z]/gi, "");
}

function autocomplete(input, dictionary) {
  input = convertSpecialChars(input);
  const validWords = dictionary
    .reduce((acc, cur) => {
      if (cur.toLowerCase().startsWith(input)) {
        acc.push(cur);
      }
      return acc;
    }, [])
    .slice(0, 5);
  return validWords.slice(0, 5);
}

function cleanString(s) {
  let r = "";
  for (let c of s) {
    if (c !== "#") r += c;
    if (c === "#" && r.length > 0) r = r.slice(0, -1);
  }
  return r;
}

const backwardsPrime = (start, stop) => {
  const arr = [];
  for (let i = start; i <= stop; i++) {
    if (
      isPrime(i) &&
      isPrime(+[...`${i}`].reverse().join("")) &&
      i !== +[...`${i}`].reverse().join("")
    ) {
      arr.push(i);
    }
  }
  return arr;
};

const isPrime = (n) => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
};

const countBits = int => {
  let binInt = int.toString(2).split("");
  let oneBits = 0;
  binInt.filter(el => {
    el === "1" ? oneBits++ : "";
  });
  return oneBits;
};

const bouncingBall = (h, b, w) => {
  if (h <= 0 || b <= 0 || b >= 1 || w >= h) return -1;
  let count = 0;
  while (h > w) {
    count++;
    h *= b;
    if (h > w) count++;
  }
  return count;
};

const solution = string => {
  let curr = 0;
  const arr = [];
  [...string].forEach((l, i) => {
    if (l === l.toUpperCase()) {
      arr.push(string.slice(curr, i));
      curr = i;
    }
  });
  arr.push(string.slice(curr, string.length));
  return arr.join(" ");
};
const towerBuilder = numFloors => {
  let ans = [];
  const numStars = currFloor => currFloor + (currFloor - 1);
  const offset = currFloor => numFloors - currFloor;
  for (let i = 1; i <= numFloors; i++) {
    ans.push(
      " ".repeat(offset(i)) + "*".repeat(numStars(i)) + " ".repeat(offset(i))
    );
  }
  return ans;
};

String.prototype.camelCase = function() {
  return `${this}`
    .split(" ")
    .filter(w => w.length)
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join("");
};

const longestConsec = (strarr, k) => {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
  let longest = "";
  for (let i = 0; i <= strarr.length - k; i++) {
    let test = strarr.slice(i, i + k);
    if (test.join("").length > longest.length) longest = test.join("");
  }
  return longest;
};

const isValidCoordinates = (coordinates) => {
  const lat = coordinates.split(",")[0];
  const long = coordinates.split(",")[1].slice(1);
  return coordinates.split(",").length > 2 ||
  !isValid(lat, "lat") ||
  !isValid(long, "long") ||
  !isDigitOrSpecChar(lat) ||
  !isDigitOrSpecChar(long)
    ? false
    : true;
};

const isValid = (coordinate, type) => {
  if (type === "lat") {
    return Math.abs(coordinate) >= 0 && Math.abs(coordinate) <= 90
      ? true
      : false;
  } else {
    return Math.abs(coordinate) >= 0 && Math.abs(coordinate) <= 180
      ? true
      : false;
  }
};

const isDigitOrSpecChar = (str) => {
  const allowed = [
    "-",
    ",",
    ".",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  for (let char of [...str]) {
    if (!allowed.includes(char) || char === " ") {
      return false;
    }
  }
  return true;
};

const count = string => {
  let answer = {};
  for (let i = 0; i < string.length; i++) {
    !answer[string[i]] ? (answer[string[i]] = 1) : answer[string[i]]++;
  }
  return answer;
};
const countSmileys = arr => {
  let count = 0;
  const eyes = [":", ";"],
    nose = ["-", "~"],
    mouth = [")", "D"];
  const hasEyesAndMouth = face =>
    eyes.includes(face[0]) && mouth.includes(face[1]);
  const hasEyesAndNoseAndMouth = face =>
    eyes.includes(face[0]) && nose.includes(face[1]) && mouth.includes(face[2]);
  arr.forEach(face => {
    if (hasEyesAndMouth(face) || hasEyesAndNoseAndMouth(face)) {
      count++;
    }
  });
  return count;
};

const duplicateCount = text => {
  let newText = text.toLowerCase().split("");
  let ans = {};
  let count = 0;
  for (let char of newText) {
    ans[char] ? ans[char]++ : (ans[char] = 1);
  }
  for (let key in ans) {
    if (ans[key] >= 2) count++;
  }
  return count;
};

const createPhoneNumber = numbers => {
  let partOne = [numbers[0], numbers[1], numbers[2]].join(""),
    partTwo = [numbers[3], numbers[4], numbers[5]].join(""),
    partThree = [numbers[6], numbers[7], numbers[8], numbers[9]].join("");
  partOne = `(${partOne}) `;
  partTwo = `${partTwo}-`;
  return partOne + partTwo + partThree;
};

const dataReverse = (data) => {
  const segments = [];
  for (let i = 0; i < data.length; i += 8) {
    segments.push(data.slice(i, i + 8));
  }
  return segments.reverse().reduce((acc, cur) => acc.concat(cur), []);
};

const decodeMorseLetter = letter => MORSE_CODE[letter];

const decodeMorseWord = word =>
  word
    .split(" ")
    .map(letter => decodeMorseLetter(letter))
    .join("");

const decodeMorse = morseCode =>
  morseCode
    .trim()
    .split("   ")
    .map(word => decodeMorseWord(word))
    .join(" ");

const isPangram = string => {
  const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97)).join('');
  const stringArray = [...string.toLowerCase()];
  for (let i = 0; i < alphabet.length; i++) {
    if (!stringArray.includes(alphabet[i])) return false;
  }
  return true;
};

const narcissistic = value =>
  [...`${value}`].reduce((a, b) => a + Math.pow(+b, `${value}`.length), 0) ===
  value;

const songDecoder = song => {
  return song
    .split("WUB")
    .filter(word => word)
    .join(" ");
};
const duplicateEncode = word => {
  let lcWord = word.toLowerCase();
  let charCount = {};
  let answer = "";
  for (let char of lcWord) {
    charCount[char] ? charCount[char]++ : (charCount[char] = 1);
  }
  for (let char of lcWord) {
    charCount[char] > 1 ? (answer += ")") : (answer += "(");
  }
  return answer;
};

const beggars = (values, n) => {
  return values.reduce((acc, cur, idx) => {
    acc[idx % n] += cur;
    return acc;
  }, [...Array(n)].fill(0));
};

const findEvenIndex = arr => {
  for (let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce((acc, el) => acc + el, 0);
    const rightSum = arr.slice(i + 1).reduce((acc, el) => acc + el, 0);
    if (leftSum === rightSum) return i;
  }
  return -1;
};

function mineLocation(field) {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === 1) {
        return [i, j];
      }
    }
  }
}
const findMissing = list => {
  const diff = (list[list.length - 1] - list[0]) / list.length;
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] !== diff) return list[i] + diff;
  }
};

const findOutlier = ints => {
  let evens = [];
  let odds = [];
  ints.filter(int => (int % 2 ? odds.push(int) : evens.push(int)));
  if (odds.length === 1) return odds[0];
  else return evens[0];
};

const getKyu = (allHonors, honor) => {
  const sortedHonors = allHonors.sort((a, b) => a - b);
  const oneKyu = [sortedHonors[0]];
  const twoKyu = [sortedHonors[1], sortedHonors[2]];
  const threeKyu = [sortedHonors[3], sortedHonors[4]];
  const fourKyu = [sortedHonors[5], sortedHonors[6], sortedHonors[7]];
  const fiveKyu = [sortedHonors[8], sortedHonors[9], sortedHonors[10]];
  const sixKyu = [sortedHonors[11], sortedHonors[12], sortedHonors[13]];
  const sevenKyu = [
    sortedHonors[14],
    sortedHonors[15],
    sortedHonors[16],
    sortedHonors[17]
  ];
  const eightKyu = [
    sortedHonors[18],
    sortedHonors[19],
    sortedHonors[20],
    sortedHonors[21]
  ];
  if (oneKyu.includes(honor)) return 1;
  if (twoKyu.includes(honor)) return 2;
  if (threeKyu.includes(honor)) return 3;
  if (fourKyu.includes(honor)) return 4;
  if (fiveKyu.includes(honor)) return 5;
  if (sixKyu.includes(honor)) return 6;
  if (sevenKyu.includes(honor)) return 7;
  if (eightKyu.includes(honor)) return 8;
  else return 0;
};

const findInArray = (array, iterator) => {
  for (let i = 0; i < array.length; i++) {
    if (iterator(array[i], i)) return i;
  }
  return -1;
};

const makeAmpString = names => `${names[0].name} & ${names[1].name}`;

const list = names => {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0].name;
  if (names.length === 2) return makeAmpString(names);
  const lastTwo = makeAmpString(names.slice(-2));
  const others = names
    .slice(0, -2)
    .map(n => n.name + ",")
    .join(" ");
  return `${others} ${lastTwo}`;
};
const diamond = n => {
  if (n % 2 === 0 || n < 0) return null;
  const center = `${"*".repeat(n)}\n`;
  let top = "";
  let bottom = "";
  let curr = n - 2;
  let padding = 1;
  while (curr > 0) {
    bottom += `${" ".repeat(padding)}${"*".repeat(curr)}\n`;
    curr -= 2;
    padding += 1;
  }
  curr = 1;
  padding -= 1;
  while (curr < n) {
    top += `${" ".repeat(padding)}${"*".repeat(curr)}\n`;
    curr += 2;
    padding -= 1;
  }
  return `${top}${center}${bottom}`;
};

const calculateWorth = (side, worth) =>
  side.split(" ").reduce((acc, curr, i) => acc + worth[i] * curr, 0);

const goodVsEvil = (good, evil) => {
  good = calculateWorth(good, [1, 2, 3, 3, 4, 10]);
  evil = calculateWorth(evil, [1, 2, 2, 2, 3, 5, 10]);
  if (good > evil) return "Battle Result: Good triumphs over Evil";
  if (good < evil) return "Battle Result: Evil eradicates all trace of Good";
  return "Battle Result: No victor on this battle field";
};

const groupByCommas = (n) => {
  const m = [...`${n}`].reverse();
  return m.reduce(
    (acc, cur, idx) =>
      (idx + 1) % 3 === 0 && idx !== m.length - 1
        ? `,${cur}${acc}`
        : `${cur}${acc}`,
    ""
  );
};

function mineLocation(field) {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === 1) {
        return [i, j];
      }
    }
  }
}
const stockList = (listOfArt, listOfCat) => {
  if (!listOfArt.length || !listOfCat.length) {
    return "";
  }
  const newList = listOfArt.reduce((acc, cur) => {
    const art = cur.split(" ")[0].slice(0, 1);
    const quantity = +cur.split(" ")[1];
    if (acc[art]) {
      acc[art] += quantity;
    } else {
      acc[art] = quantity;
    }
    return acc;
  }, {});
  for (const cat in newList) {
    if (!listOfCat.includes(cat)) {
      delete newList[cat];
    }
  }
  return listOfCat
    .reduce((acc, cur) => {
      if (!(cur in newList)) {
        acc += `(${cur} : 0)`;
      } else {
        acc += `(${cur} : ${newList[cur]})`;
      }
      return (acc += " - ");
    }, "")
    .slice(0, -3);
};
const to_nato = words =>
  [...words.toUpperCase()]
    .filter(c => c !== " ")
    .reduce((acc, curr) => (acc += `${conversion(curr)} `), "")
    .trim();

const conversion = char => (chart[char] ? chart[char] : char);

const chart = {
  A: "Alfa",
  B: "Bravo",
  C: "Charlie",
  D: "Delta",
  E: "Echo",
  F: "Foxtrot",
  G: "Golf",
  H: "Hotel",
  I: "India",
  J: "Juliett",
  K: "Kilo",
  L: "Lima",
  M: "Mike",
  N: "November",
  O: "Oscar",
  P: "Papa",
  Q: "Quebec",
  R: "Romeo",
  S: "Sierra",
  T: "Tango",
  U: "Uniform",
  V: "Victor",
  W: "Whiskey",
  X: "Xray",
  Y: "Yankee",
  Z: "Zulu"
};
const isValidOctet = oct => oct === `${+oct}` && +oct <= 255 && +oct >= 0;

const isValidIP = str =>
  str.split(".").filter(oct => isValidOctet(oct)).length === 4;

const iqTest = input => {
  const splitInput = input.split(" ");
  let even = [],
    odd = [];
  for (let i = 0; i < splitInput.length; i++) {
    splitInput[i] % 2 ? odd.push(i + 1) : even.push(i + 1);
  }
  return even.length === 1 ? even[0] : odd[0];
};
const isPrime = num => {
  if (num < 2) return false;
  if (num === 2) return true;
  const sqrt = Math.sqrt(num) + 1;
  for (let i = 2; i < sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isIntArray = (a) => (!a ? false : a.every((el) => Number.isInteger(el)));
const kebabize = str => {
  let result = "";
  const numbers = Array.from(Array(10).keys());
  for (let char of str) {
    if (numbers.includes(+char)) continue;
    if (char === char.toUpperCase() && !numbers.includes(+char)) {
      result += "-" + char.toLowerCase();
      continue;
    }
    result += char;
  }
  return result[0] === "-" ? result.slice(1) : result;
};

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

let petString = "James has a pet cat.";
let petRegex = /(John|Emma|Liz|Alice) has a pet (dog|bird|cat|fish)/; // Change this line
let result = petRegex.test(petString);

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[eaoui]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

let quoteSample = "3 blind mice.";
let myRegex = /[^\daeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);






