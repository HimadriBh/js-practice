var a = 9;
function arrayValues(arr){
    let i = 0;
   return function(){
       console.log(arr[i]);
        i++;
       if(i === arr.length) {
            i = 0;
        }
   }
}

var num = "10";
(function () {
	console.log(num);
  var num = "50";
  console.log(num);}
  )();

  const name = "sam";
name[0] = 'm';

console.log(name);

var a = 10;

const displayNumber = () => {
    console.log(a);

    if (a){
        var a = 11;
        console.log(a);
    }

    return a;
}

a = displayNumber();
console.log(a);

const nums = [1, 2, 3, 4];

const getArrayValue = arrayValues(nums);
getArrayValue();
getArrayValue();
getArrayValue();
getArrayValue();
getArrayValue();
getArrayValue();
