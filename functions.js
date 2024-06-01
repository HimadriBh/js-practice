let username = "Mridu";
let user = {
  username: "Himadri",
  sayHello: () => {
    console.log("Hello, " + this.username);
  },
  sayHello2(){
    console.log("Hello, " + this.username);
  }
}

user.sayHello();
user.sayHello2();
