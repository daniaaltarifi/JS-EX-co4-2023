// Question 1
let arr=[1,2,3,4,5];
arr.forEach(function(x){
    console.log(x)});
// Question 2
let newarr =arr.flatMap((squ) => squ * 2);
console.log(newarr);
// Question 3
let even=arr.filter((num)=>{
    if (num % 2==0) {
        console.log(num)
    }
})
// Question 4

let result = arr.reduce(function(num1, num2) {
  return num1 + num2;
});
console.log(result);
// Question 5
let char_arr=["apple", "banana", "cherry"];
let new_char_arr=char_arr.sort();
console.log(new_char_arr);
// Question 6
char_arr.reverse();
console.log(new_char_arr);
// Question 7

let concat_arr=[1, 2, 3];
let concat_arr2=[4, 5, 6];
let concat=concat_arr.concat(concat_arr2);
console.log(concat);
// Question 8
let array7= [1, 2, 3, 4, 5, 6];
let sliceArray7=(array7.slice(0,2)).concat(array7.slice(4,6));
console.log(sliceArray7);
// Question 9
let splice1=arr.splice(1,1)
console.log(splice1);
// Question 10





// Question 11
let joinString=[1,2,3,4,5];
let newJoin=joinString.join()
console.log(newJoin);
// Question 12.
let splitArray= "1,2,3,4,5"
splitArray.split();
console.log(splitArray[8]);
// Question 13.
let length=joinString.length;
console.log(length);
// Question 14.
let text=[]
for (const iterator of joinString) {
    text+=iterator
}

console.log(text)
// Question 15.

let for_in=[]
for (const key in joinString) {
    for_in+=joinString[key]
        
}
console.log(for_in)
// Question 16.

console.log((Array.isArray([1,2,3,4,5])
));
// Question 17
console.log(Array.from({0: "a", 1: "b", 2: "c", length: 3}))
// Question 18
console.log(Array.of(1, 2, 3));
// Question 19

console.log(joinString.fill( 0,0, 3))
// Question 20
let numArr=[1,2,3,4,5]
console.log(numArr.copyWithin(1,0,6))
// Javascript exercsice arrays
// exercises 1
let orangeArr=["Coding", "Academy", "By", "Orange"];
orangeArr.push("jordan")
console.log(orangeArr)
let splice_org =orangeArr.splice(0,2)
console.log(splice_org)
let orangeArr1=["Coding", "Academy", "By", "Orange"];
let unshift=orangeArr1.unshift("Welcome","To")
console.log(orangeArr1)
let orangeArr2=["Coding", "Academy", "By", "Orange"];
orangeArr2.shift()
console.log(orangeArr2)
let orangeArr3=["Coding", "Academy", "By", "Orange"];

let join=orangeArr3.join()
console.log(join)
let slice=orangeArr3.slice(0,1).concat(orangeArr3.slice(3,4))
console.log(slice)

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

let length_veg=vegetables.length;
console.log(length_veg);
vegetables.push(4)
console.log(vegetables)
vegetables.pop();
console.log(vegetables)
let index=fruit.indexOf("orange")
console.log(index)
fruit.push(2)
console.log(fruit)
fruit.shift();
console.log(fruit)
let food=vegetables
let conc_fruit=fruit.concat(food)
console.log(conc_fruit)
food.reverse()
console.log(food);
let join_food=food.join()
console.log(join_food)


