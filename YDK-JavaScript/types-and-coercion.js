console.log(" ");
console.log("// Types Overview");
var v;
console.log(typeof v); // undefined
v = "1";
console.log(typeof v); // string
v = 2;
console.log(typeof v); // number
v = true;
console.log(typeof v); // boolean
v = {};
console.log(typeof v); // object
v = Symbol();
console.log(typeof v); // symbol

console.log(typeof doesnotexist); // undefined

var v = null;
console.log(typeof v); // "object" OOPS!

v = function(){};
console.log(typeof v); // function hmm?

v = [1,2,3];
console.log(typeof v); // object hmm?


console.log(" ");
console.log("// NaN");
var greeting = "Hello, Class!";
var something = greeting / 2 ;

console.log(something); // Nan
console.log(Number.isNaN(something)); //true
console.log(Number.isNaN(greeting)); //false

// NaN is a special operation that doesn't mean just not a number. Otherwise greeting would be false too
// The var something which tries to divide a string results in NaN 

console.log(" ");
console.log("// Coercion");

// Coercion is used when one type changes to another
var msg1 = "There are ";
var numStudents = 16;
var msg2 = " students.";
console.log(msg1 + numStudents + msg2); 
// Essentially, implicit coercion. 

console.log(
    `There are ${numStudents+""} students.`
    ); 
// another example of implicit coercion. Overloading type with string "" chars 

// Coercion should be used to make programming more clear
// All info from DOM comes as a string

// Using comparison operators automatically converts a string to number as long as one variable is already a number. 

// == vs === 
// traditionally thought of as "loose" vs "strict"
// what's more correct is that == allows coercion, === does not

var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workshopEnrollment1 