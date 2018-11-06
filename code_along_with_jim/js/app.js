//  -------------------------------------------
// CODE ALONG WITH JIM... again // -------------------------------------------
// let a = '';
// let b = 'bongos';
// let c = 'get your';
//
// a = b;
// b = c;
// c = a;
//  console.log(b + ' ' + c );

//  -------------------------------------------
// CONCATINATION // ------------------------------------------

// console.log('hello my name is' + ' jessamyn');

 // const name = 'jessamyn';

 // console.log('hello my name is ' + name);
 // interpolation -->

 //  -------------------------------------------
// INTERPOLATION  // -------------------------------------------

 // insert values of variables into our strings
 // console.log(`hello my name is ${name}`);

 //  -------------------------------------------
 // CONDITIONALS & LOOPS
 // -------------------------------------------

// WHILE LOOP --------------------------------------------

// let num = 1;
// while this condition is met (this condition) run this block of code

// while (num <= 1000){
  // console.log('the number is: ' + num);
  // num++ // means num = num + 1
// }

// let num = 0;
// while (num <= 5000){
//   console.log('the number is ' + (num * num));
//   num++
// };

 // OR USE MATH.POW

 // let num = 0;
 // while (num <= 5000){
 //   console.log('the number is ' + Math.pow(num, 2));
 //   num++
 // };

// while (Boolean Expression){
  //run some code in this block
  // change the condition, so you don't run your loop to infinity

// comparative operators: all of these can be used in the boolean expression in our loop
// >
// <
// === equal to, down to the datatype
// >=
// <=
// != not equal to

// FOR LOOP --------------------------------------------

// from 1 to 1000 print in console
// for (let i=1; i <= 1000; i++){
//   console.log(`the number is ${i}`);
// }
// from 1000 to 1 print in console
// for (let i=1000; i >= 1; i--){
//   console.log(`the number is ${i}`);
// }
//  -------------------------------------------
// more CONDITIONALS & LOOPS
// -------------------------------------------

// conditionals - skip lines of code
// loops - repeat lines of code
// functions - save and later deploy lines of code

// const sunny = !true;
// console.log(sunny);
//
// const temp = 76;
// console.log(temp);
//
// const notSunny = true;
// console.log(notSunny);
//
// let toggle = true;
// console.log(`this is toggle ${toggle}`);
//
// toggle = !toggle;
// console.log(`this is toggle ${toggle}`);

//  -------------------------------------------
// IF ELSE STATEMENTS
// -------------------------------------------

// const name = 'jessamyn';
// console.log(`name is ${name}`);
// conditional below: will only run name if it's jessamyn
// if (name === 'jessamyn'){
  // console.log(`jessamyn here, my name again, is ${name}`);
// }
// let age = 21;
// let age = 38;
// let age = 19;
// const drinkingAge = 21;

 // if (age >= 21) {
 //   console.log(`you are allowed to buy beer because you are at least ${drinkingAge}`);
 // } else {
 //   console.log(`you need a fake id b/c you are not ${drinkingAge}`);
 // }


 //  -------------------------------------------
 // MODULUS & OTHER CONDITIONALS WITH A FOR LOOPS & IF ELSE
 // -------------------------------------------

 //pseudocode:
 // for (initial expression; condition; increment expression){
 //   code that will be executed with IF and then either with a log or a return then an ELSE with a log or return
 // }
// LOOP WITH MODULUS TO FIND EVEN OR ODD NUMBER ---------------
// let num = 8
// let num = 5
//
// if (num % 2 == 0) {
//   console.log('number is even');
// } else {
//   console.log('number is odd');
// }
 // NOW LETS PUT IT IN A LOOP
// for (let i = 1; i < 20; i++){
//     if (i % 2 === 0){
//     console.log(`${i} is an even number`);
//   } else {
//     console.log(`${i} is an odd number`);
//   }
// }

// FOR LOOP OVER AN ARRAY -----------------------------------
// animals = ['Bambino', 'Dyna', 'Pina', 'Avocado baby Wally', 'Avocado baby Eva'];
//
// for (let i = 0; i < animals.length; i++){
//   console.log(animals[i]);
// }

// -------------------------------------------
// ARRAYS & LOOPING OVER THEM (ITERATING)// -------------------------------------------

 // an array is a list

 // const array = ['bambino', 'dyna', 'pina', 'avocado baby wally', 'avocado baby eva'];

 // console.log(array[0]); //bambino
 // console.log(array.length); //5
 // loop through and show each one -->
 // for (let i = 0; i < array.length; i++){
 //   console.log(`all my furry babies --> ${array[i]}`);
 // }

// .length is a PROPERTY of our object called array
// put array. in the console and all the available properties will come up like:
// fill
// filter
// concat
// pop
// push
// map

// const ghostBusters1984 = [
//   "Venkman",
//   "Spengler",
//   "Stantz",
//   "Zeddemore",
//   "Melnitz",
//   "Barrett",
//   "Tully"
// ];
// console.log(ghostBusters1984[3]);
// console.log(ghostBusters1984.length);

// iterate through and list each item in the array
// for (let i = 0; i < ghostBusters1984.length; i++){
//   console.log(`ghostbusters squad member --> ${ghostBusters1984[i]}`);
// }

// use +=2 to get every other one
// for (let i = 0; i < ghostBusters1984.length; i +=2){
//   console.log(`every other squad member --> ${ghostBusters1984[i]}`)
// }

 // new array -->
// const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch", "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];

//log all of the elements in the array
// for (let i = 1; i < drSeuss.length; i++){
//   console.log(`all the character in dr seuss --> ${drSeuss[i]}`);
// }

//log the odd numbered index items in the array
// for (let i = 1; i < drSeuss.length; i+=2){
//   console.log(`every other dr seuss character --> ${drSeuss[i]}`);
// }

// log the index number and the item of every odd numbered index items (on separate lines)
// for (let i = 1; i < drSeuss.length; i+=2){
//   console.log(`index num for every other item in dr seuss --> ${i}`);
//   console.log((`index name for every other item in dr seuss --> ${drSeuss} `));
// }

// -------------------------------------------
// USING CONDITIONALS TO SELECT ELEMENT IN AN ARRAY ---------------------------------------
 // const foodSelection = ['pizza', 'ramen', 'tea', 'ice cream', 'apple pie'];

//new array
// for (let i = 0; i < foodSelection.length; i++){
//     console.log(`food array -->${foodSelection[i]}`);
// }

// print the items if the index num is even
// for (let i = 0; i < foodSelection.length; i++){
//   if(i % 2 === 0){
//   console.log(`name & index num if the item is even --> ${foodSelection[i]} ${i}`);
//   }
// }

//print every even index num and when i = 4

// for (let i = 0; i < foodSelection.length; i++){
//   if((i % 2 === 0) || (i === 3)){
//     console.log(`every even index num $ name and if it = 4--> ${foodSelection[i]} ${i}`);
//   }
// }

// const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety", "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];

// log the even numbered items in the array using a conditional statement.
// for (let i = 0; i < looneyTunesChars.length; i++){
//   if(i % 2 === 0){
//     console.log(`even items and their array num -->${looneyTunesChars[i]} ${i}`);
//   }
// }

// log the even numbered items in the array and the item with the index of 3 using a conditional statement.
// for (let i = 0; i < looneyTunesChars.length; i++){
//   if((i % 2 === 0)|| (i === 3)){
//     console.log(`-->${looneyTunesChars[i]} ${i} <--even items and index 3`);
//   }
// }

// log the odd numbered index items in the array using a conditional statement.
// for (let i = 0; i < looneyTunesChars.length; i++){
//   if(i % 2 !== 0){
//     console.log(`all odd numbered items ${looneyTunesChars[i]} ${i}`);
//   }
// }

// -------------------------------------------
// CHANGING ELEMENTS IN AN ARRAY ----------------------------------------------

// const veggies = ["red pepper", "leek", "pumpkin", "broccoli"];

// change the property of index key 'broccoli' to 'spinach'

// veggies[3] = 'spinach';
// console.log(`${veggies}`);

// change the 3rd element of the array to equal itself times 10 using the compound operator *= and print each one (it loops over each every time and keeps multiplying)
// const numbers = [21, 18, 5, 3, 2, 1, 1];
// for (let i = 0; i < numbers.length; i++){
// console.log(`${numbers[i]}`);;
// if (numbers[2] = (numbers[2]*= 10)){
// console.log(`all the numbers -->${numbers[i]}`);
//   }
// }








//












//
