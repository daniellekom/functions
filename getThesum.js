const arr = [5, 8, 7, 12, 13, 17, 22];

function addUpEvens(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

console.log(addUpEvens(arr));

console.log("....................................");

//write a function to calculate and return the total tips and then output the total

const tips = [5, 8, 13, 2, 14, 27, 9, 18];

function addUpTips(arrayOfTips) {
let total = 0;
for (let i = 0; i < arrayOfTips.length; i++) {
total = total + arrayOfTips[i];
  }
  return total;
}

console.log("total tips:", addUpTips(tips));

console.log("....................................");

