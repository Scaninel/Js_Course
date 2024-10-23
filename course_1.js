var can=47;

const sevval = "merhaba ben Şevval";

const can2 = "merhaba ben de Can";

console.log(can);
console.log(sevval);
console.log(can2);

can++;

console.log(can);

can--;

console.log(can);

var qStr = "hello world !! \" this is the quotes inside the quotes\" ";
console.log(qStr);

qStr = 'hello world !! "this is the another method for quotes inside the quotes"';
console.log(qStr);

qStr = `'hello world !! "this is the one more 'method' for quotes inside the quotes"'`;
console.log(qStr);

var mStr = "first string\t" + "second string";
console.log(mStr);

mStr += " third string";
console.log(mStr);

console.log(mStr.length);
console.log("first Character of the string:" + mStr[0])

const c = "5";
console.log("c is a: " + typeof(c));

const b = 91;
console.log("b is a: " + typeof(b));

let a = "Hello";
a = "world";
console.log(a);

let a1 = "world";
let b1 = `Hello ${a1}!`;
console.log(b1);

// below lines pops up a input screen to user. Entered value is stored into a2
//let a2 = "Hello";
//a2 = prompt("world");
//console.log(a2);

let a2 = 5;
let b2 = 70;
let c2 = "5";
b2++;
console.log(b2);

let result = 3 + 4 * 2 / 8;
console.log(`result: ${result}`);

let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2);

const a3 = 5;
const b3 = 10;
console.log(a3 > 0 && b3 > 0); //1
console.log(a3 == 5 && b3 == 4); //0
console.log(true ||false); // 1
console.log(a3 == 3 || b3 == 10); //1
console.log(a3 == 3 || b3 == 7);  //0

arr3 = new Array(10);
arr4 = [10];
console.log(arr3);
console.log(arr4);

let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);
console.log("numbers", numbers);

let shoppingList = ["Milk", "Bread", "Apple", "Olive"];
console.log(shoppingList.length);
shoppingList[1]="Banana";
console.log("My shoppingList: ", shoppingList);