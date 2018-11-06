1. Loop through numbers 1 - 8 & only print out the numbers 1, 2, 4, 5, 6, 8.
for (let i=1; i <=8; i++) {
if (i = 3 || 7) {
break
} else {
continue
}
}
console.log(i)


2. FIZZBUZZ: Print out numbers 1 = 100. For multiple of 3, print "Fizz", multiples of 5, print "Buzz", and multiple of 3 & 5, "FizzBuzz"

// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('fizz');
//   } else if (i % 5 === 0) {
//     console.log('buzz');
//   }
//   else {
//     console.log(i);
//   } }

Note: if you say i % 3 === 0 log(‘fizz’) then buzz then fizzbuzz, the numbers 15, 30, 45, 60, 75, & 90 will return fizz b.c it logs out the first true instance.


3. PRIME: CHECK IF A NUMBER IS PRIME OR NOT.

const isPrime = (num) => {
    for (i = 2; i < num; i++){  //prime is #s divisible only by 1 and self. Don’t check those.
  if (num % i===0) { //divisible by number below it.
    return false;
}
  }
return true;
};
console.log(isPrime(5)); //true. Checks 5 / 2, 5 / 3, and 5 / 4. Not 5 /5 though (it’s < not <=).

4. PRINT OUT ALL THE NUMBERS THAT ARE PRIME.

for (var counter = 0; counter <= 100; counter++) { //normal 'for loop' 0 - 100.
    var notPrime = false; //set a variable to false. this will run each time.
    for (var i = 2; i <= counter; i++) { //nested loop to compare.
        if (counter % i===0 && i!== counter) {
  //if i is divisible by itself AND i isn't equal to  the first loop's number.
            notPrime = true; //toggle to true if conditions are met.
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}

//^Run a nested loop b.c you need to compare the number with all the numbers before it.
//every time the first loop passes it triggers the nested loop again.



Compare two people’s scores. Alice and Bob will both have 3 scores. You want to compare if Alice’s 1st score is better than Bob’s and if so, give her a point. If Bob’s is bigger, give him a point.

function compareTriplets(a, b) {   //set up your 2 parameters that need to be compared.
let counterA = 0,
    counterB = 0;
for(let i=0; i < a.length ;i++){  //you pick a.length because you need to loop through your first set of numbers to compare with b. You can do this b.c they are = in length.
    if(a[i] > b[i]){
        counterA++;
    }
    else if(a[i] < b[i]){
        counterB++;
    }
}
return [counterA,counterB];



// Bubble sort (syncing sort)= put the numbers in order from least to greatest.

//SOLUTION 1:

 var ar = [1, 2, 3];

 function bubbleSort1(ar){
   let i, j, lim; //lim for limit.
   lim = ar.length; while (lim--) {
   //starts @ index of 2, then 1, 0, stops. As long as lim = ar.length it loops.
   for (i = 0, j = 1; i < ar.length; i++, j++) { //i & j are diff. b.c you are comparing.
     if (ar[i] > ar[j]) {
       //THEN SWAP. your make a temporary variable and set it to ar[i]. then ar[i] is ar[j]. last step is to make ar[j] temp. this swaps their places.
       temp = ar[i]; ar[i] = ar[j]; ar[j] = temp}
     }
}
return ar;
 }
console.log(bubbleSort1(ar));


//Bubble sort SOLUTION 2

let unsortedArr = [1, 8, 2, 5, 4] //STEP 1: Create the away.
let swapped; //STEP 2: lets us know if a swap happened. imp. b.c if no swaps happened, you know everthing is in order.

function bubbleSort(arr){ //STEP 3: Create your function. what is arr?
  swapped = false; //set initially to false.
  let end = arr.length - 1; //arr.length -1 b.c if it reaches the end it says 'run this loop', which then puts it out of bounds on the next loop.
  for (let i = 0, j = 1; i < end; i++, j++) {
    if (arr[i] > arr[j]){ //if arr[i] > then the index of the next value.
      swapped = true;
      [arr[i], arr[j]] = [arr[j], arr[i]]; //what is this for?
    }
}
end--
}

//Go through the unsortedArr until swapped = false. Then all the #s are in the right order.
do {
  bubbleSort(unsortedArr)
} while (swapped); //while swapped is true.
console.log(unsortedArr);
TAKE A SET OF POSITIVE NUMBERS AND RETURN THE HIGHEST VALUE NUMBER OUT OF THEM. Ex 1253 should be 5321. Descending order.

function descendingOrder(n){
  return parseInt(String(n).split("").sort((a,b) =>b - a).join(""));
}

//paresInt(String(n) turns it into a string
//(String(n) turns it into a string.
//.split(“”) turns it into an array.
//.sort((a,b) => b-a) puts them in descending order. This way 1, 2, 11 doesn’t go 1,11,2


































In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You need to switch A to T and vice versa. Do the same for C and G.


function DNAStrand(dna){
 let dnaKey = {
 "A" : "T",
 "T" : "A",
 "C" : "G",
 "G" : "C"
 }

 let emptyStrand = "";

 for (let i = 0; i < dna.length; i++) {
  emptyStrand += dnaKey[dna[i]];
 }

 return emptyStrand;
}




Alternative:

function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}





//Your DNA mostly has one of four nuceleic acid bases. G, C, A, T
//You want to swap the T for an RNA U.


//FIRST SOLUTION

function DNAtoRNA(dna) {
  for (i = 0; i < dna.length; i++) {

    if (dna[i] === 'T') {
      rna += 'U'
    } else {
      rna+= dna[i]
    }
    }
}
console.log(DNAtoRNA("TTT"));



//SECOND SOLUTION

function DNAtoRNA(dna) {
  var rna = '';

  for (var i = 0; i < dna.length; i++) {
    if (dna[i] === 'T') { //if (dna[i].includes("T")) {   //dna[i] gets you the specific index.
      rna += 'U'
    } else {
      rna += dna[i]
    }
  }

  return rna;
}


//need to check for lowercase too though.

// const DNAtoRNA = (dna) => {
//     const rna = dna.replace(/T/g, 'U');
//     return rna;
// }
//     console.log(DNAtoRNA('TTTT'));


//BOOLEAN FLAGS
Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.
Example...
 onlyOne() --> false
  onlyOne(true, false, false) --> true
  onlyOne(true, false, false, true) --> false
  onlyOne(false, false, false, false) --> false


//LONG WAY

function onlyOne() { //can’t put arguments in the parameter for codewars.
  var counter = 0
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] == true) { //don’t forget the i. You’re looking at the index.
    counter++;
  }} //note: for loop ends here as well as if statement.
  if (counter == 1) {
    return true;
  } else {
    return false;
  }
}


SHORTER WAY 1

function onlyOne(...flags) { //spread operator
    return flags.filter(Boolean).length === 1;
}

SHORTER WAY 2
function onlyOne(...args) {
  var match = args.toString().match(/true/g)
  return match ? match.length === 1 : false;
}





In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm (a used 3x, b 4x, h 1x)
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.
You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
The string has a length greater or equal to one and contains only letters from a to z.
#Examples:
1. s="aaabbbbhaijjjm"    error_printer(s) => "0/14"
2. s="aaaxbbbbyyhwawiwjjjwwm"   error_printer(s) => "8/22"

SOLUTION

function printerError(s) {
    return s.match(/[^a-m]/gim).length + "/" + s.length;
}


EXPLANATION
The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.


So first, you say s.match().
Inside of that you have to put / first to say it’s regex?
Then brackets.
^ means not.
 /g means global. I means case-insensitive. M means multi-line

SOLUTION 2: Checks for null.

function printerError(s) {
if(s.match(/[^a-m]/gim)==null){
return '0'+'/' + s.length;
}
return s.match(/[^a-m]/gim).length +'/' + s.length;
}


The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They need to place members based on their application form.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Note for F#: The input will be of (int list list) which is a List>
Example Input: [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]


function openOrSenior(data){
  var result = [];
  data.forEach(function(member) {
    if(member[0] >= 55 && member[1] > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  })
  return result;
}


SOLUTION WITH MAP()
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}




CONVERSIONS


TIME CONVERSION




const arr = s.slice(0,8).split(':');


arr[0] = (s.indexOf('PM') > -1) ?


        (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :


        (arr[0] == 12 ? '00' : arr[0]);


return arr.join(':');


FAHRENHEIT TO CELSIUS CONVERSION

function convertToF(celsius) {
  var fahrenheit;
  fahrenheit = (celsius * (9/5)) + 32;
// fahrenheit = celsius * 9/5 + 32 works too.
  return fahrenheit;
}
convertToF(30);


















FIND JUST THE EVEN NUMBERS

//FOR LOOP
for (i = 0; i <=10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}



//PUSH
let arr = [1, 2, 3, 4, 5, 6];
let even = [];
for(var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 0) even.push(arr[i]);
}
// even = [2,4,6]
console.log(even);


//FILTER
let arr1 = [1,2,4,5,6]

let even1 = arr1.filter(val => {
  return val % 2 === 0;
});
console.log(even1);


ES6 (no ‘return’ or {} needed)
let arr = [1,2,4,5,6]

let even = arr.filter(val =>
   val % 2 === 0);
console.log(even);








FIND JUST THE EVEN NUMBERS

DIRECTIONS:
We have an array of objects representing different people in our contacts lists. A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return "No such contact"
If prop does not correspond to any valid properties of a contact found to match name then return "No such property"


var contacts = [{
       "firstName": "Akira",
       "lastName": "Laine",
       "number": "0543236543",
       "likes": ["Pizza", "Coding", "Brownie Points"]
   },
   {
       "firstName": "Harry",
       "lastName": "Potter",
       "number": "0994372684",
       "likes": ["Hogwarts", "Magic", "Hagrid"]
   }, ];


function lookUpProfile(name, prop){
for (var x = 0; x < contacts.length; x++){ //loop to read each piece of data.
    if (contacts[x].firstName === name) { //basically nested if is saying &&
        if (contacts[x].hasOwnProperty(prop)) { //.hasOwnProperty is a method. It returns bool
            return contacts[x][prop]; //NOTE: [x][prop] not dot notation!!!
        } else {
            return "No such property";
        } } }
return "No such contact"; //this is still looking for the outer loop. No name is found.
}
lookUpProfile("Akira", "likes");

RETURN A WHOLE NUMBER IN A GIVEN RANGE.

 	function randomRange(myMin, myMax) {


 return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;

}
console.log(randomRange(5, 15));

//Explanation:
-step 1: Whole thing is wrapped in Math.floor, which rounds to the lowest integer. Don’t use this if you can output decimals in the end.

-step 2: Math.random() gives you a decimal from 0 to 0.999999. So for example, you might get .99. So you say .99 * (15 - 5 + 1). This is .99 * 11 = 10.89


- You pair Math.random() with your range (myMax - myMin +1)). If you have 10.89, you cut it to 10.

- THEN step 3: + myMin.


























CHANGE A STRING TO A NUMBER

function convertToInteger(str) {
 let int = parseInt(str); //parseInt is a function. You could say (str,2)
				   //for the optional radix parameter.
 return int;
}
convertToInteger("56");


USE CONDITIONAL OPERATOR (TERNARY)

function checkEqual(a, b) {
return a == b ? true: false;  //don’t need if / else. Could say a > b
}
checkEqual(1, 2);


TERNARY FOR IF ELSE IF ELSE

function checkSign(num) {
 return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero"
}
checkSign(10);

CHECK IF A VAL IS A BOOLEAN PRIMITIVE. link

function booWho(bool) {
 if(typeof bool === 'boolean') {
  return true;
}
 return false;
}
booWho(null);


TITLE CASE A SENTENCE. Link


Return the string with the 1st letter of each word capitalized. Make sure the rest of the word is in lowercase. Capitalize connecting words like "the" and "of".

USING NO HIGHER ORDER FUNCTIONS
Function titleCase(str) {
    str = str.toLowerCase().split(‘ ‘);  //puts in an array at every blank space. lowerCase() 1st. Not sure why.
    for (var i = 0; i < str.length; i++) {
   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1) //if just one param it goes til end. STR[i]
//extract from index 1 to the end of str
   }
  return str.join(‘ ‘); // ‘ ‘ is at every blank space.  ‘’ is at every character.
}
  titleCase(“I’m a little tea pot”);


USING MAP

Function titleCase(str) {
 Return str.toLowerCase().split(‘ ‘).map(function(word) {
   Return (word.charAt(0).toUpperCase() + word.slice(1)); //if just one param it goes til end.
}).join(‘ ‘);
}
titleCase(“I’m a little tea pot”);
function titleCase(str) {
  Return str.toLowerCase().split(‘ ‘)
}


USING REPLACE


function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
titleCase("I'm a little tea pot");

USING REPLACE (2)
function titleCase(str) {
str=str.split(" ");
for(var i=0;i<str.length;i++){
str[i]=str[i].toLowerCase();
str[i]=str[i].replace(/^[a-z]/,str[i].charAt(0).toUpperCase());
}
return str.join(" ");
}
titleCase("I’m a little tea pot");
SUM THE NUMBERS IN A RANGE link
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]); //find the max b.w the two numbers. Can’t just say .max(arr)
 					   b.c it has to go through the array that’s inside the ().
    var min = Math.min(arr[0], arr[1]); //find the min b.w the two numbers.
    var temp = 0; //variable to store sum b.c you need to start at 0.
    for (var i=min; i <= max; i++){
        temp += i; //logs 0,1,2,3,4
    }
  return(temp);
}
sumAll([1, 4]);

USING SPREAD OPERATOR (Intermediate)

function sumAll(arr) {
var min = Math.min(…arr), //spread operator takes the data and looks through it or pushes it.
max = Math.max(…arr),
sum = 0;

for (var i = min; i <= max; i++){ //loop through 1 to 4.
sum += i; //1 + 2 + 3 + 4 = 10.
}
return sum;
}
sumAll([1, 4]);

USING SPREAD OPERATOR (Advanced)


function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);
SUM PRIME NUMBERS link

//FIRST FUNCTION: CHECK FOR PRIME NUMBERS
function sumPrimes(num) {
var sum = 0; //summing numbers uses a new variable set at 0.
function checkPrime(i){ //new function that doesn't deal with sumPrimes(num)
 for (var k = 2; k < i ; k++){   //prime = #s > 1 divisible by self. start at 2.
 //this loop checks for all the numbers under the integer we are testing, which will be i. for example, if you are testing 9(i). it'll check it up to 8 (k).
    if (i % k === 0){ //if i (ex: 9) is divisible by any of 2-8 return false.
 		        //Modulus at 0 means it’s  divisible by itself.
   return false;
  }
} return true;
}

//SECOND FUNCTION: now you have to sum them up.
for (var i = 2; i <= num; i++){
 if (checkPrime(i)){
  sum += i;
  }
 }
return sum;
}
sumPrimes(10); //answer: 17.




FINDERS KEEPERS
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

function findElement(arr, func) { //2 arguments
 let num = 0; //start at 0 so you can put a diff. nrumber in there later. You could [] instead I think
 		    and use push.
  for (let i = 0; i < arr.length; i++) {
   num = arr[i]; //now for each loop arr[i] is num.
   if (func(num)) { //check it against your conditions. func(num) is bc you are taking in num as the function parameter. This is why you can’t say if(num) == func. Your function can’t equal your parameter.
     return num;
   }
 }
  return undefined; //IMPORTANT: has to be out of the loop so all the numbers run first.
}
findElement([1, 2, 3, 4], num => num % 2 === 0);
//first arg is the array.  second arg is the truth test, which is a function.














JOIN ARRAYS WITH SLICE AND SPLICE AT A SPECIFIC SPOT


//Copy each element of the first array into the second array. The catch is to begin inserting elements at a specified index in the second array based on whatever number n is.

function frankenSplice(arr1, arr2, n) {
 let localArray = arr2.slice();
//We sliced off arr2. This creates an exact replica. You do this b.c you are copying each element of the 1st arr INTO the second. You don't want ot mutate the 2nd so you copy it.

 for (let i = 0; i < arr1.length; i++) {
//loop through arr1 so you can copy each element of it.
   localArray.splice(n, 0, arr1[i]); //start at n (where the challenge wants you start at. ex: if n is 3, start inserting at the 3rd index), delete 0, add all of arr1.
   n++; //this ensures each element in arr1 gets inserted in the correct position.

 }
 return localArray;
}












Remove all falsy values from an array.

NOTE: There are six falsy values in JS. They are
false,
Null,
 0,
"",
undefined,
and NaN.
OPTION 1:
function bouncer(arr) {
return arr.filter(function (value){
if (value !== Boolean){   //if value is not typeof Boolean, return value.
return value;
}
});
}
bouncer([7, “ate”, “”, false, 9]);



OPTION 2:
function bouncer(arr) {
 return arr.filter(Boolean);
}
//^^^ filter method creates a new array with all the elements that pass the test. Boolean built-in function takes an argument and returns true as long as the value of the argument is anything other than falsy. Boolean is a built-in js function. Ex Boolean(10>9) //true


OPTION 3:
function bouncer(arr) {
 //Only return values that evaluate as true inside the array.
  return arr.filter(function(value){
    if (value){ //value is implicitly true.
      return (value);
    }
  });
}


Basic Algorithm Scripting: Where do I Belong

Directions:
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.


For example, getIndexToIns([1,2,3,4], 1.5)should return 1because it is greater than 1(index 0), but less than 2(index 1).

Likewise, getIndexToIns([20,3,5], 19)should return 2because once the array has been sorted it will look like [3,5,20]and 19is less than 20(index 2) and greater than 5(index 1).
Remember to use Read-Search-Ask if you get stuck. Write your own code.




function getIndexToIns(arr, num) {
 let fullArray = arr.push(num);  //remember push() inserts a value at the beginning. The value is in your param. It doesn’t matter though where b.c you’ll sort next.
 fullArray = arr.sort(function(a,b) {
   return a - b; //a-b least to greatest. Think: a is least then b is greatest. B-a is greatest to least.
 })
 return fullArray.indexOf(num);
}
getIndexToIns([40, 60], 50);



















Basic Algorithm Scripting: Mutations
