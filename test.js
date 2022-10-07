let arr = [1,2,3,4,5,6,7];
let total = arr.length;
// console.log(total/2);
let split_arr = arr.slice(0,total/2);
let split_arr2 = arr.slice(total/2,  arr.length);
// console.log(split_arr);
// console.log(split_arr2);

var toDo = ["call mom", "dishes"];
var chore = toDo.pop();
console.log(chore);