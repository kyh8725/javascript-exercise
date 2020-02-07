var time = 0;
var timeOfWeek = "";

function checkTime(time, timeOfWeek) {
  if (timeOfWeek === "weekday") {
    if (time < 10) {
      console.log("You're early!");
    } else if (time === 10) {
      console.log("You're on-time!");
    } else {
      console.log("You,re late!");
    }
  } else if (timeOfWeek === "weekend") {
    console.log("You shouldn't be in class!");
  } else {
    console.log("The timeOfWeek value can only be either weekday or weekend");
  }
}

var facialExpression = "";
function checkFacial(facialExpression) {
  switch (facialExpression) {
    case "smiling":
      console.log("You look happy");
      break;
    case "frowning":
      console.log("You look sad");
      break;
    case "scowl":
      console.log("You look angry");
      break;
    default:
      console.log("I don't know");
      break;
  }
}
// if no break; the code will execute
//from the next line in swtich statement.
//not next line outside of the switch.

var famousCats = ["carfield", "felix", "meowth"];
function printCats(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
function printCatsNoFirst(array) {
  for (var i = 1; i < array.length; i++) {
    console.log(array[i]);
  }
}
function printCatsReverse(array) {
  for (var i = array.length - 1; i >= 0; --i) {
    console.log(array[i]);
  }
}

function printCatsW(array) {
  var i = 0;
  while (array.length > i) {
    console.log(array[i]);
    i++;
  }
}
function printCatsNoFirstW(array) {
  var i = 1;
  while (array.length > i) {
    console.log(array[i]);
    i++;
  }
}
function printCatsReverseW(array) {
  var i = array.length - 1;
  while (0 <= i) {
    console.log(array[i]);
    i--;
  }
}
var myFavorite = "felix";

function findMyFavorite(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] != myFavorite) {
      console.log("Kitty?");
    } else {
      console.log("There you are!");
      break;
    }
  }
}

function findMyFavoriteW(array) {
  var i = 0;
  while (array.length > i) {
    if (array[i] != myFavorite) {
      console.log("Kitty?");
    } else {
      console.log("There you are!");
      break;
    }
    i++;
  }
}

var largest = [
  1,
  23,
  4,
  5,
  6,
  7,
  3,
  45,
  345,
  23536,
  234,
  523,
  9,
  234,
  ,
  9999,
  234
];

function findLargest(array) {
  var temp = 0;
  for (var i = 0; i < array.length; i++) {
    if (temp < array[i]) {
      temp = array[i];
    }
  }
  return temp;
}
console.log(findLargest(largest));
var pyramid = [1, 2, 3, 4, 5, 6, 7, 8];

function buildTriangle(array) {
  for (var i = 0; i < array.length; i++) {
    var j = array[i];
    var s = "";
    while (j > 0) {
      s += array[i];
      j--;
    }
    console.log(s);
  }
}
console.log(buildTriangle(pyramid));
function buildPyramid(array) {
  for (var i = 0; i < array.length; i++) {
    var s = "";
    var k = i;
    while (k < array.length) {
      s += " ";
      k++;
    }
    var j = array[i];
    while (j > 0) {
      s += array[i] + " ";
      j--;
    }
    console.log(s);
  }
}

var numberOne = 0;
var numberTwo = 0;

function isFifty(numberOne, numberTwo) {
  if (numberOne === 50 || numberTwo === 50 || numberOne + numberTwo === 50) {
    console.log("success");
  } else {
    console.log("failure");
  }
}

function sundayChristmas() {
  for (year = 1900; year < 2051; year++) {
    var d = new Date(year, 12, 25);
    if (d.getDay() === 0) {
      console.log(year, " has Sunday Christmas");
    }
  }
}

function getAverage(numOne, numTwo, numThree) {
  return (result = (numOne + numTwo + numThree) / 3);
}

function isEqual(first, second) {
  var comp = false;
  var firstL = "";
  var secondL = "";
  firstL = first;
  secondL = second;
  if (firstL.toLowerCase === secondL.toLowerCase) {
    comp = true;
  } else {
    comp = false;
  }
  return comp;
}

function userGreeting(firstName, lastName) {
  console.log("Hi", firstName, lastName + "! What a beautiful day.");
}

var fiveLetters = [
  "Hi",
  "my",
  "name",
  "is",
  "Daniel",
  "Kim",
  "how",
  "are",
  "you",
  "doing",
  ">?S?SAFD"
];

function isFiveLetter(array) {
  var letter = "";
  var overFive = 0;
  var underFive = 0;
  for (var i = 0; i < array.length; i++) {
    letter = array[i];
    if (letter.length > 5) {
      overFive++;
    } else {
      underFive++;
    }
  }

  console.log("Total numbers of words in the array:", array.length);
  console.log("Number of words greater than 5 letters:", overFive);
  console.log("Number of words less than 5 letters:", underFive);
}

function rockGame(playerOne, playerTwo) {
  var oneTemp = "";
  var twoTemp = "";
  oneTemp = playerOne;
  twoTemp = playerTwo;
  console.log("player one:", oneTemp);
  console.log("player two:", twoTemp);
  switch (oneTemp.toLowerCase()) {
    case "rock":
      if (twoTemp.toLowerCase() === "scissors") {
        console.log("Result: Player one wins");
      } else if (twoTemp.toLowerCase() === "paper") {
        console.log("Result: player two wins");
      } else {
        console.log("Result: draw");
      }
      break;
    case "paper":
      if (twoTemp.toLowerCase() === "rock") {
        console.log("Result: Player one wins");
      } else if (twoTemp.toLowerCase() === "scissors") {
        console.log("Result: player two wins");
      } else {
        console.log("Result: draw");
      }
      break;
    case "scissors":
      if (twoTemp.toLowerCase() === "paper") {
        console.log("Result: Player one wins");
      } else if (twoTemp.toLowerCase() === "rock") {
        console.log("Result: player two wins");
      } else {
        console.log("Result: draw");
      }
      break;
    default:
      console.log("not valid");
      break;
  }
}
var arrays = [1, 3, 4, 6, 7, 2, 1, 5, 7, 10, 3];

function unique(arrays) {
  var arrayResult = [];
  for (var i = 0; i < arrays.length; i++) {
    if (!arrayResult.includes(arrays[i])) {
      arrayResult.push(arrays[i]);
    }
  }
  return arrayResult;
}

//Jan 28 morning challenge

var aNumber = 0;

function isEven(numbers) {
  if (numbers === 0) {
    console.log("the number is 0");
  } else if (numbers % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

var arr = [1, 2, 3, 4, 5, 6];

function questionTwo() {
  arr.push(7);
  arr.splice(0, 1);
  arr[3] = 4.5;
  var num = arr.pop();
  console.log(num);
  console.log(arr);
}

function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    var fizzBuzz = [];
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function falsy(array) {
  var arrayTemp = [];
  for (var i = 0; i < array.length; i++) {
    if (
      array[i] === 0 ||
      array[i] === "" ||
      array[i] === false ||
      array[i] === undefined ||
      array[i] === [] ||
      array[i] === null
    ) {
      arrayTemp.push(array[i]);
    }
  }
  return arrayTemp;
}
function truthy(array) {
  var arrayTemp = [];
  for (var i = 0; i < array.length; i++) {
    if (
      !(
        array[i] === 0 ||
        array[i] === "" ||
        array[i] === false ||
        array[i] === undefined ||
        array[i] === [] ||
        array[i] === null
      )
    ) {
      arrayTemp.push(array[i]);
    }
  }
  return arrayTemp;
}

// Jan 29 morning challenge

function hypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}

function average(nums) {
  let total = 0;
  for (numbers of nums) {
    total += numbers;
  }
  return total / nums.length;
}

function search(list, item) {
  let position = [];
  for (let i = 0; i < list.length; i++) {
    if (item === list[i]) {
      position.push(i);
    }
  }
  return position.length === 0 ? "not found" : position;
}

// Feb 3 2020 morning challenge

/*
Create a function called capitalizeWords which will receive one string parameter.
This function wil capitalize the first letter of every word. 
For this problem, assume that every word will be separated by only one space. 

Test Cases:
Input: "hello world"
Output: "Hello World"

Input: "hi, my name is jeff."
Output: "Hi, My Name Is Jeff." 
*/

function capitalizeWords(string) {
  let stringTemp = string.split(" ");
  let result = "";
  for (str of stringTemp) {
    let strTemp = str.replace(str.charAt(0), str.charAt(0).toUpperCase());
    result += strTemp + " ";
  }
  return result;
}
console.log(capitalizeWords("javascript is fun"));

//Feb 4 morning challenge
/*
Create a function called generateFactorial which will receive one number parameter.
This function will return the factorial of the number parameter.
For example, if the number is 4, return the result of 4 * 3 * 2 * 1 which is 24.
​
Test Cases:
Input: 4
Output: 24
                
Input: 8
Output: 40320 
*/

function generateFactorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * generateFactorial(num - 1);
}

function generateFactorial2(numb) {
  let result = numb;
  for (let i = numb - 1; i >= 1; i--) {
    result *= i;
  }
  return result;
}

//Feb 5 morning Challenge
/* 
Create a function called dashInserter which will receive one string parameter. 
This function will insert dashes (-) between each two odd numbers in the string. 
For example: if the string is 474993 the output should be 4749-9-3. 
Zero will not count as an odd number. 

Test Cases:
Input: "77728"
Output: "7-7-728"
                
Input: "74750"
Output: "747-50"
*/
function dashInserter(str) {
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 > 0 && str[i + 1] % 2 > 0) {
      temp += str[i].concat("-");
    } else {
      temp += str[i];
    }
  }
  return temp;
}
console.log(dashInserter("77728"));
//Feb 6 2020 code along
//javascript constructor

const spaceShip = {
  name: "Falcon",
  speed: 1000,
  takeOff: function() {
    return `the spaceship ${this.name} takes off and flies at a speed of ${this.speed}`; //template literals.
  }
};

// feb 6 2020 exercise

function Burger(toppings, protein, isGluten) {
  this.toppings = toppings;
  this.protein = protein;
  this.containsGluten = isGluten;
  this.describe = function() {
    console.log(`protein: ${this.protein}`);
    console.log(`toppings: ${this.toppings}`);
  };
  this.warning = function() {
    if (this.cotainsGluten) {
      console.log("the burger contains gluten");
    } else {
      console.log("gluten-free burger");
    }
  };
}
const bigMac = new Burger(["beef", "tomato", "cheese"], "animal", true);
const whopper = new Burger(["beef", "onion", "cheese"], "animal", false);

//Feb 6 whiteboarding

function addNum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addNum(4));
obj = {
  name: "jim",
  email: "hi"
};

function convert(obj) {
  const list = [];
  for (o in obj) {
    list.push([o, obj[o]]);
  }
  return list;
}
console.log(convert(obj));
let string = "hi";
string.toUpperCase();

//replace function can't not be used . it replaces the first letter it sees and capitalizes it
function capital(str) {
  str = str.replace(str[0], str[0].toUpperCase());
  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] === " ") {
      str = str.replace(str[i + 1], str[i + 1].toUpperCase());
    }
  }
  return str;
}
console.log(capital("javascript is fun"));

// Feb 7 2020 morning challenge

/*
Create a function called LargestPair which will receive a number parameter.
This function will determine the largest double digit number within a whole number.
For example: if the number is 6727449765734967 then the function will return 97. 
For this problem assume that the input will always contain at least two positive digits. 
​
Test Cases:
Input:5482673
Output:82
​
Input:541623457
Output: 62
*/
function largestPair(num) {
  let numb = num.toString();
  let temp1 = numb[0] + numb[0 + 1];
  for (let i = 1; i < numb.length - 1; i++) {
    let temp2 = numb[i] + numb[i + 1];
    temp1 < temp2 ? (temp1 = temp2) : temp1;
  }
  return temp1;
}
console.log(largestPair(5482673));

/* 
Create a function called uniqueCharacters which will receive one string parameter.
This function will determine if it contains at least 10 distinct characters. 
If it does return true, otherwise it should return false. 
For example: if the string is "cde456jjoooo!" then the function will return false because this string only contains 9 distinct characters: c, d, e, 4, 5, 6, j, o, ! which adds up to 9. 
​
Test Cases:
Input: "5937ggtta:=6"
Output: true
                
Input:"bbbbkkkkkkkk37777"
Output: false
*/

function uniqueCharacters(str) {
  const count = [];
  count.push(str[0]);
  for (chk of str) {
    !count.includes(chk) ? count.push(chk) : count;
  }
  let result = count.length >= 10 ? true : false;
  return result;
}
console.log(uniqueCharacters("bbbbkkkkkkkk37777"));

//Feb 7 morning lectures

/**
 *
 * class Person {

  constructor(name, age, height){
    this.name = name;
    this.age = age;
    this.height = height;
  }

  sayHello(){
    return `${this.name} says Hello.`
  }
 }
 * class Student extends Person{
   constructor(){
     super()
   }
 }
 */
