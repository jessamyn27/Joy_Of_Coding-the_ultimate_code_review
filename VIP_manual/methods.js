
REVERSE - Reverses an array.

var array = [1,2,3,4,5,6,7];
var newArray = []; //empty array to put data in.
newArray = array.reverse(); // [7,6,5,4,3,2,1]

--------------------------------------------------------------------------------

CONCAT - Concatenates

var oldArray = [1,2,3];
var newArray = [];
var concatMe = [4,5,6];
newArray = oldArray.concat(concatMe);

--------------------------------------------------------------------------------

SPLIT - Splits a string into an array.
var string = "Split me into an array";
var array = [];
array = string.split(' '); //splits at every white space.
array = string.split(''); // splits at every index.

--------------------------------------------------------------------------------

JOIN - Join each element of an array into a string separated by whatever delimiter you provide as an argument.

var veggies = ["Celery", "Radish", "Carrot", "Potato"];
var salad = veggies.join(" and ");
console.log(salad); // "Celery and Radish and Carrot and Potato"

--------------------------------------------------------------------------------

REPLACE - Replaces 1st param with 2nd param in a string.

let alphabet = 'abc';

let lastLetter = alphabet.replace('a', 'z')
console.log(lastLetter) //zbc



BEGINNING

SHIFT - Removes the first element from an array and returns that removed element. This method changes the length of the array.
UNSHIFT - adds something to the first index in an array.

ex1: function test() {
array = ["February", "March", "April"];
newArray = array.unshift("January");
console.log(array) = ["January", "February", "March", "April"]
console.log(newArray); = 4.
}
test()

--------------------------------------------------------------------------------

END

PUSH - adds something on an array at the end. Changes the original array.
ex: var array = ["a", "b", "c"];
    var newArray = array.push("d"); //returns ["a", "b", "c", "d"];
   console.log(array); //a,b,c,d
   console.log(newArray); //4

NOTE: .push() always returns the new number of elements in the array. It does not return this instance or a new Array instance. push() is a mutator actually changes the contents of the array.


POP - removes the last element on an array and returns it. Changes the original array.

    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
    var popped = myFish.pop();

    console.log(myFish); // ['angel', 'clown', 'mandarin' ]
    console.log(popped); // 'sturgeon'


*NOTE: If you want to put something in a specific index. Just say myFish(2) = ‘shark’;
--------------------------------------------------------------------------------

SLICE (array or string) - 2 arguments (start, end). Returns the selected elements in an array, as a new array object. (It’s like substring).
1st param: what element to start from. 2nd: where to cut off from. Both params are optional. If the end param is omitted, rest is sliced off.


var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3); //starts at orange,
console.log(citrus) // ‘Orange’, ‘Lemon’
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var myBest = fruits.slice(-3, -1);
// ^^ #s start from the end. Starts from the third to last index. The last index is not 0. So -1: Mango, -2: Apple, -3 Lemon. Slice Lemon. Then Slice off the last element (-1), which is Mango. You are left with: Lemon, Apple



--------------------------------------------------------------------------------
SPLICE
3 Parameters:  array.splice(start, deleteCount, what to add)
Important: Mutates the original array.
1. Start: index to start from.
2. deleteCount: how many to delete, inclusive. 0 or - is none. > index = length of arr
The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
3. What to add: Adds in the spot you just deleted from.
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
//removed = ‘angel’, ‘clown’
// myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"]


var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2, ‘marlin’, ‘goldfish’);

// myFish is ["parrot", "anemone", “marlin”, “goldifsh”, "sturgeon"]
// removed is ["blue", "trumpet"]
FIND The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

var array1 = [5, 12, 8, 130, 44];
var found = array1.find(function(element) {
  return element > 10;
});
console.log(found); //12
--------------------------------------------------------------------------------




--------------------------------------------------------------------------------

THESE ARE STRING METHODS

charAt():
The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
NOTE: Array you just put [0] or [1] to see what is at the specific index.
charCodeAt()
The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
toString() converts arrays to strings.
stringify() converts json to strings. The JSON.stringify() method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
indexOf() Lets you find the index for a specific character. Finds the first case and then satops though.
lastIndexOf() Lets you find the last index of a specific character.

substring() Lets you find a range of characters.
Example:
Let name = ‘Christopher’

Val = name.charAt(1); //h
Val = name.charCodeAt(name.length -1);//r
Val = name.indexOf(h); //1
Val = name.lastIndexOf(h) //8
Val = name.substring(0,5) //Chris
includes() Gives a boolean value.
Val = name.includes(‘Chris’); //true
toLowerCase()
toUpperCase()
toString()
endsWith: The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

trim: The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).


trimEnd: The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.


trimStart: The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.
Math.random() - The Math.random() function returns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range.

Example:
function randomRange(myMin, myMax) {
return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
}
console.log(randomRange(5, 15));



Math.floor() - Rounds a decimal down.  ex:  5.05 = 5.      5.99 = 5

Math.ceil() - Rounds a decimal up.  ex: 5.05 = 5.     5.99 = 5

Math.max() - Returns the largest of the numbers in an array.

Math.min() - Returns the smallest of the numbers in an array.
























GLOBAL, BUILT-IN PROPS & FUNCTIONS

Link

Properties: NaN, undefined, and infinity. Don’t need to put undefined in “”

Functions:  decodeURI(), encodeURI(), and more are helpful. More...


eval() - evaluates a string and executes as if it was script code. Ex:
function myFunction() {
    var x = 10;
    var y = 20;
    var a = eval("x * y") + "<br>";
    var b = eval("2 + 2") + "<br>";
    var c = eval("x + 17") + "<br>";
    var res = a + b + c;
    document.getElementById("demo").innerHTML = res;
}


isNaN() - determines if a number is an illegal value. Illegal = string, NaN, undefined, etc.

Number() - Converts an object’s value into a number.

parseFloat() - This function determines if the first character in the specified string is a number. If it is, it parses the string until it reaches the end of the number, and returns the number as a number, not as a string.
Note: Only the 1st number in the string is returned, leading and trailing spaces are allowed, & if the 1st char cannot be converted to a number you get NaN!
Ex:   var a = parseFloat("10") or (“10.00”) //10
        Var b = parseFloat(“10.33”) //10.33
    var d = parseFloat("34 45 66"); //34
    var e = parseFloat("   60   "); //60
    var f = parseFloat("40 years"); //40
    var g = parseFloat("He was 40")"; //NaN


parseInt() - Parses a string and converts it to an integer.

String() - Converts an objects value to a string.


SPREAD OPERATOR Link

The spread operator allows an expression to be expanded in places where multiple elements/variables/arguments are expected. Link

Could use instead of slice() or concat(), Math.max(), Math.min(), changing from a string to array


Combine arrays:

var arr1 = ['two', 'three'];
var arr2 = ['one', ...arr1, 'four', 'five'];
console.log(arr2); // ["one", "two", "three", "four", "five"]

Math functions:

let numbers = [9, 4, 7, 1];
Math.min(...numbers); // 1


Destructuring:
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
