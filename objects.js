const user = {
  name: "Himadri",
  age: 29,
}

user.name = "Himadri Bhargava";

// delete a property
delete user.age;

console.log(user); // { "name": "Himadri Bhargava" }

const like = "like the video";

// using square backets to add dynamic property
user[like] = true;

console.log(user); // { "name": "Himadri Bhargava", "like the video": true }


//
const obj = {
  a: "one",
  b: "two",
  a: "three",
}

console.log(obj); // the first property value will be overirdden


let nums = {a: 100, b: 200, title: "my nums"};

function multipyNums(obj){
  for(i in obj){
    if(typeof obj[i] === "number"){
      obj[i] *= 2
    }
  }
}

multipyNums(nums);
console.log(nums);

function makeUser() {
    return {
      name: "John",
      ref: this
    };
}

let user = makeUser();

alert( user.ref.name );

// question
const user = {
    name: 'Piyush',
    greet() {
      return `Hello, ${this.name}!`;
    },
    farewell: () => {
      return `Goodbye, ${this.name}!`;
    }
};
console.log(user.greet());
console.log(user.farewell());


// create a calculator
let calculator = {
    sum() {
      return this.a + this.b;
    },

    mul() {
      return this.a * this.b;
    },

    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
object.method(callback, 1, 2);
