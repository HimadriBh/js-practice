// var vs let vs const

// Scope

var a = 5;
console.log(a);

{
  const b = 8;
}

// gives error, called outside the scope of the variable
console.log(b);


// Variable shadowing
function test(){
  let a = "Hi";

  if(true){
    let a = "Hello"; // variable shadowing
    console.log(a)
  }

  // prints Hi
  console.log(a);
}


test();


// Declaration without initialization

const a; // throws error, since const has to be defined at the declaration
let b; // doesn't throw console.error, as it can be reassigned


// Re-initiallization

const a = 5;
a = 6; // ERROR: Assignment to const variable.


// Variable hoisting
// Javascript Execution context

// using var
console.log(count); // undefined
var count = 1;


console.log(count2);  // cannot access variable count2before initialization
let count2 = 2;

function abc(){
  console.log(a, b, c);

const c = 30;
let b = 20;
  var a = 10;
}

abc();
