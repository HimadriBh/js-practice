

function createBase(num1){
  return function(num2){
    console.log(num2 + num1);
  }
}

var addSix = createBase(6);
addSix(10);
addSix(21);


function find(index){
  let a = [];
  for(let i = 0; i < 1000000; i++){
    a[i] = i * i;
  }

  return function(index){
    console.log(a[index]);
  }
}

const closure = find();
console.time("6");
find(6);
console.timeEnd("6");


function counter(){
  var _counter = 0;

  function add(increment){
    _counter += increment;
  }

  function getCounterValue(){
    return _counter;
  }

  return {
    add,
    getCounterValue
  }
};

const c = counter();

c.add(20);
console.log(c.getCounterValue());


// module pattern

var Module =
