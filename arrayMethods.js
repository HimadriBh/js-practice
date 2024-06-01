const cats = ["blue", "rose", "kitty"];

// includes - if an element is present in the array
console.log(cats.includes("rose"));

// indexOf - return index of the element present in array
// return -1  if element is not present
// only gives for first matched elements
console.log(cats.indexOf("kitty"));
console.log(cats.indexOf("summer"));

// reverse - reverses the array
console.log(cats.reverse());

const colors = ["red", "blue", "pink", "indigo", "cyan", "yellow"];

// slice
const firstColor = colors.slice(0, 1);

console.log(colors);
console.log(firstColor);

const months = ["Jan", "Feb", "April", "June", "Summer"];

// will insert "March" at an index 2
months.splice(2, 0, "March");

console.log(months);

months.splice(4, 0, "May");
console.log(months);

console.log(months.join(","));


const dummy = [1, 3, 4, 2, 89];

dummy.fill(3, 3);
console.log(dummy);
