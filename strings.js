

// strings are some text wrapped around quotes
// double quotes, single quotes, or ``


// string concatenation
console.log("Hello" + "there"); // Hellothere

// performs type cohersion when adding to a number
const age = "12";

console.log(age + 1);  // "121"

let animal = "Zebra";

// accessing string charaters like an array elements
console.log(animal[2]); // "b"

// has length property
console.log(animal.length); // 5


// string methods
// .trim() - trims leadind and trailing whitespaces

const string1 = "  Hello friend ";
console.log(string1); // before using the method, - "Hello "
console.log(string1.trim()); // "Hello"

// .toUpperCase()

console.log(string1.toUpperCase()); //  HELLO FRIEND

// we can perform chaining on the string to perfom the operation in one line
console.log(string1.trim().toUpperCase()); //  HELLO FRIEND

console.log(string1.toUpperCase().trim()); //  HELLO FRIEND

// should give the same result
console.log(string1.trim().toUpperCase() === string1.toUpperCase().trim()) // true

// indexOf()

console.log(string1.indexOf("f")); // 8

// slice()
console.log(string1.slice(8)); // friend

// replace  - replaces a char or series of charaters with the given string or
console.log(string1.replace("Hello", "Hi my")); //    Hi my friend
