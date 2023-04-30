    // Question 1
for ( let i=1;i<=10;i++){
    console.log(i)
}
console.log("/////////////////////")
    // Question 2
    let num=1;
    while(num<=10){
     console.log(num)
     num++;
    }
    console.log("/////////////////////")

    // Question 3
   let arr=[1,2,3,4,5];
   for(let y=0;y<arr.length;y++){
    console.log(arr[y])
   }
   console.log("/////////////////////")

    // Question 4
    for (let even=0;even<=10;even++){
        if(even % 2==0){
            console.log(even)
        }
    }
    console.log("/////////////////////")
        // Question 5

let sum=0;
for(let number=0;number<=10;number++){
    sum+=number;
}
console.log(sum)
console.log("/////////////////////")
// Question 6

let array=[1,2,3,4,5];
let max=array[0];
for(let maxarr=0;maxarr<array.length;maxarr++){
    if (array[maxarr]>max) {
        max=array[maxarr]
        
    }
}
console.log(max);
console.log("/////////////////////")
// Question 7
let minarray=[5,4,3,2,1];
let min=minarray[0];
for (let index = 0; index < array.length; index++) {
if (minarray[index]<min) {
    min=minarray[index];
}
}
console.log(min);
console.log("/////////////////////")
// Question 11
let avg_array=[1,2,3,4,5];
let sum2=0;
for (let index1 of avg_array) {
sum2+=index1;
}
avg=sum2/avg_array.length;

console.log(avg);
console.log("/////////////////////")
// Question 12
let factorial=5;
let tot=1;
for(let f=0;f<5;f++){
    tot=tot * (factorial-f)
}
console.log(tot);
console.log("/////////////////////")
// Question 13

let limit = 6;
let sequence = [0, 1];

for (let s = 2; s <= limit; s++) {
  sequence[s] = sequence[s - 1] + sequence[s - 2];
}

console.log(sequence);
console.log("/////////////////////")
// Question 14

let limit1 = 20;

for (let p = 2; p <= limit1; p++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(p); j++) {
    if (p % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(p);
  }
}
console.log("/////////////////////")
// Question 15
var number5=5;
var five=0;
for (let n = 1; n <=10; n++) {
five=number5 * n  
console.log(number5+"*" + n +"="+five);

}
console.log("/////////////////////")
// Question 16
var three_array=[[1,2,3],[4,5,6],[7,8,9]];
var new_arr=three_array.flat();
console.log(new_arr);
console.log("/////////////////////")
// Question 17
var num_arr=[1,2,3,4,5];
var new_array=num_arr.reverse();
console.log(new_array)
console.log("/////////////////////")
// Question 18
var specific_range=[1,2,3,4,5];
var new_range=specific_range.slice(2);
console.log(new_range);
// for (let r = 0; r < specific_range.length; r++) {
// if(specific_range[0]==1)
// console.log(" ")
// else if(specific_range[1]==2)
//   console.log(" ")


// else if(specific_range[2]==3)
// console.log(specific_range[2])
// else if(specific_range[3]==4)
// console.log(specific_range[3])
// else if(specific_range[4]==5)
// console.log(specific_range[4])
// }
// console.log(specific_range[2])
// console.log(specific_range[3])
// console.log(specific_range[4])
console.log("/////////////////////")
// Question 19
var specific_step=[1,2,3,4,5];
var new_step=specific_step.slice(0,1);
console.log(new_step);
var new_step=specific_step.slice(2,3);
console.log(new_step);
var new_step=specific_step.slice(4);
console.log(new_step);
console.log("/////////////////////")
// Question 20
var search_arr=[1,2,3,4,5];
for (let find = 0; find < array.length; find++) {
  var search= search_arr.includes(find);
console.log(search)
}

console.log("/////////////////////")
// Question 21
const numbers = [1, 2, 1, 3, 2, 1]
const numberToFind = 1;
let frequency = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === numberToFind) {
    frequency++;
  }
}
console.log(frequency);

