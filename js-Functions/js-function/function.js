

function findsmalist(array) {
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i]; 
      }
    }
  
    console.log(min);
  }




let sortString = 
function (stringg)  {
    return stringg.split("").sort().join("");
  };
    
  console.log(sortString("hello"));
  function fact (fac5){
let tot=1;
for(let f=0;f<8;f++){
    tot=tot * (fac5-f)
}
console.log(tot);
  }
  fact(8);
  function oddoreven(num){
    if (num % 2==0)
    console.log("even")
    else
    console.log("odd")
  }
  oddoreven(3);

  function evennum(even){
    for (let x = 0; x < even_arr.length; x++) {
if (even_arr[x] % 2==0) {
    console.log(even_arr[x])
}        
    }
  }
  const even_arr=[1, 2, 3, 4, 5, 6,7,8,9]
  evennum(even_arr)
console.log("///////////////")
  function numbersonly(num_arr){
    for (let index1 = 0; index1 <= arr_type.length; index1++) {
if (typeof( arr_type[index1])==="number") {
    console.log(arr_type[index1])
}        
    }
  }
  let arr_type=['Ayham', 3, 7, 'Alaa', 13, 'coding']
  numbersonly(arr_type)
  console.log("///////////////")

  function addup(total){
    for (let sum = 5; sum >= 1; sum--) {
        total+=sum
    }
    console.log(total)
  }
  addup(6)
  console.log("///////////////")

const points = [7, 13, 3, 77, 100]
points.sort(function(a, b){return a-b

});
console.log(points)
let min=points[0]
console.log(min)
let max=points[4]
console.log(max)
let length=points.length
console.log(length)
let sum=0
for (let x = 0; x < points.length; x++) {
    sum+=points[x]
}
let avg=sum/points.length
console.log(avg)
let minmax=[]
minmax.push(min )
minmax.push(max )
minmax.push(length )
minmax.push(avg )
console.log(minmax)

function wordnum(words_num){
  let count=0
for (let s = 0; s < words_num.length; s++) {
if (words_num[s]==" "){
count+=1
}

}
console.log(count)

}
wordnum('hello from CodingAcademy! ')

function  multiplyLength(multiplyArr){
for (let multiply = 0; multiply < multiplyArr.length; multiply++) {
lengthArr= multiplyArr[multiply]* 3
console.log(lengthArr)
}
}
let lengthArr=[]
multiplyLength([4,2,5])

function checkending(str1,str2){

if (str1.charAt(str1.length-1)===str2.charAt(str2.length-1)) {
  
console.log("true")
}
else{
console.log("false")
}

}
checkending("CodingSchool", "Ac")

function doublechar(chars){

console.log("c".repeat(2).concat("o".repeat(2)).concat("d".repeat(2)).concat("i".repeat(2)).concat("n".repeat(2)).concat("g".repeat(2))) 


}
doublechar('Coding')

function findindex(findInArr,elements){
  let index=0;

if (elements=='Ali') {
  console.log(index=1)
} else if( elements=='Mazen') {
  console.log(index=2)
}  
else if (elements=='Ayham') {
  console.log(index=3)
}
else{
  console.log(index=4)
}
}
findindex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali')

function getsum(arr_absoulte){
  let sum = 0;

for (let positve = 0; positve < arr_absoulte.length; positve++) {
  if (arr_absoulte[positve]<0) {
    let convert= arr_absoulte[positve] * -1
    sum+=convert

  }
}
console.log(sum)
}
getsum([-1, -3, -5, -4, -10, 0])

function convertString(charString){
let newCharString=[charString];
console.log(newCharString)

}
convertString("Orange Jordan")

// function digitConvert(digit){
// for (let num7 = 0; num7 < digit.length; num7++) {

//   if (num7==0) {
//     newDigit[num7]="*"
//   }
//   else  if (num7==1) {
//     newDigit[num7]="*"
//   }
//   else  if (num7==2) {
//     newDigit[num7]="*"
//   }
//   else  if (num7==3) {
//     newDigit[num7]="*"
//   }
//   else  if (num7==4) {
//     newDigit[num7]="*"
//   }
//   else  if (num7==5) {
//     newDigit[num7]="*"
//   }
//   else  if (num7==6) {
//     newDigit[num7]="*"
//   }

// }

// let newString=""
// newString=newDigit
// console.log(newString)
// }
// let newDigit=[]

// digitConvert("0 7 7 6 8 0 7 7 7 7")
function digitConvert(digit){
let replacedigit=digit.replace(0,"*").replace(7,"*").replace(7,"*").replace(6,"*").replace(8,"*").replace(0,"*").replace(7,"*")
console.log(replacedigit)

}
digitConvert("0776807777")

function emailconvert(email){
for (let track = 0; track < email.length; track++) {
if (email[track]=="@") {
  let emailreplace=email.replace("orange_academy","...")
  console.log(emailreplace)
}  

}

}
emailconvert("orange_academy@orange.com")
console.log("edit//////////")
function firstUpperCase(first){
let firstUpper=first.split(' ')
for (let i = 0; i < firstUpper.length; i++) 
{
  firstUpper[i]= firstUpper[i].charAt(0).toUpperCase()+firstUpper[i].slice(1);
}

 return  firstUpper.join(' ') 

};


console.log( firstUpperCase("coding academy by orange"));
console.log("________________________")
function reverse(num_reverse){
num_reverse.reverse()
let new_string=num_reverse.join()
console.log(new_string)

}
reverse([9, 2 ,4 ,8 ,5])

function swap_value(a,b){
  let newA=a
  a=b
    console.log(a)
  console.log(newA)

}

swap_value(3,4)


function removeCharacter(str, indexed) {
  if (indexed >= str.length) {
    return str;
  }
  return str.slice(0, indexed) + str.slice(indexed + 1);
}
let str = "orange";
let indexed = 3;
let newStr = removeCharacter(str, indexed);
console.log(newStr);

function mergeString(arrMerge){
for (let cut = 0; cut < arrMerge.length; cut++) {
arrMerge[cut]=  arrMerge[cut].slice(1)


}
let newMerge=arrMerge.join("");
console.log(newMerge)

}


mergeString(["lora", "inge"])

function specificChar(appears){
let a=appears.charAt(0);
if (a==="o") {
return true}
else
return false
}
console.log(specificChar("orange"))

function strToArr(str_arr){
let newStrArr= str_arr.split(" ")
console.log(newStrArr)
}
strToArr("Coding Academy by Orange")

function reorderChar(reorderArr){
let newReorder= reorderArr.split("")
 let newSort=newReorder.sort();
 let joinNew=newSort.join("")
 console.log(joinNew)
}
reorderChar("Orange")

