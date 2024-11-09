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

favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
console.log(favoriteFruits);
let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(favoriteFruits);

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);
arrOfShapes.splice(2, 12, "rectangular");
console.log(arrOfShapes);

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

arr8.pop();
console.log(arr8);

arr8.shift();
console.log(arr8);

arr8.splice(1, 3);
console.log(arr8);

delete arr8[2];
console.log(arr8);

arr8 = [ 2, 6, 7, 8, 6, 6];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);
console.log(arr8.indexOf(6, 2));
console.log(arr8.lastIndexOf(6));

let ages = [18, 72, 33, 56, 40];
console.log(ages);
ages.sort();
console.log(ages);
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
console.log(names);
names.sort();
console.log(names);
names.reverse();
console.log(names);

/*
1. Create an empty array to use as a shopping list.
2. Add Milk, Bread, and Apples to your list.
3. Update "Bread" with Bananas and Eggs.
4. Remove the last item from the array and output it into the console.
5. Sort the list alphabetically.
6. Find and output the index value of Milk.
7. After Bananas, add Carrots and Lettuce.
8. Create a new list containing Juice and Pop.
9. Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console.
11. Your final list should look like this:
["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice"
*/

let MyshoppingList = ["Milk" , "Bread", "Apples"];
console.log(MyshoppingList);
MyshoppingList.splice(1, 1, "Bananas", "Eggs");
console.log(MyshoppingList);
console.log(MyshoppingList[MyshoppingList.length - 1])
MyshoppingList.pop();
console.log(MyshoppingList);
MyshoppingList.sort();
console.log(MyshoppingList);
console.log(MyshoppingList.indexOf("Milk"));
MyshoppingList.splice(1, 0, "Carrots", "Lettuce");
console.log(MyshoppingList);

let MyshoppingList2 = ["Juice" , "Pop"];
MyshoppingList = MyshoppingList.concat(MyshoppingList2,MyshoppingList2);     
console.log(MyshoppingList);
console.log(MyshoppingList.lastIndexOf("Pop"));

/*OBJECTS*/

let myCar = {brand: "Toyota",
            Model_Year: 2023,
            Repaired: false,
            fuel_consump: 3.5,
}

let newItem = "color";
myCar[newItem] = "grey"
console.log(myCar);

newItem = "forSale";
myCar[newItem] = false;
console.log(myCar);

console.log(myCar.brand);
console.log(myCar.Model_Year);
console.log(myCar.forSale);
