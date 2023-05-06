console.log("Question 1")
function clean(addition){
let whiteSpace= addition.trim();
let newWhitespace= whiteSpace.split(" ")
console.log(newWhitespace)

}
let arrclean=[" injustice", " SuperMan", "Batman ", " flash "]
arrclean.map(clean)
console.log("Question 2")
function milesToKm(converts){
let ToatlDistance=[]
for (let distance = 0; distance <arrConvert.length; distance++) {
   ToatlDistance= arrConvert[distance]* 1.609344   
   console.log(ToatlDistance)

}

}
let arrConvert= [10, 20, 30, 40];
arrConvert.map(milesToKm)

console.log("Question 3")

function squareFunction(element){
    return element ** 2;
      }

  let newSquare = [1, 2, 3, 4, 5];
  let squaredArray = newSquare.map(squareFunction);
  console.log(squaredArray); 
  
  let total = 0;
  for (let xSum = 0; xSum < squaredArray.length; xSum++) {
      total += squaredArray[xSum];
  }
  console.log(total);
  console.log(total/squaredArray.length)
  console.log("Question 4")
  function plus4(originalElement){
 return originalElement + 4 ;
 
  }
  let arr_plus4= [1, 2, 3, 4, 5];
  let new_arr_plus4=arr_plus4.map(plus4)
console.log(new_arr_plus4)

console.log("Question 5")



// function evenDoubleNUM(){
// for (const x in arrEven) {
//   if (arrEven[x] % 2 ==0) {
//     console.log(arrEven[x])
//       }
//     }

// }

//   let arrEven=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let new_MAP=arrEven.map(evenDoubleNUM)

console.log("Question 6")
const words = ['apple', 'banana', 'cherry', 'date'];
let new__Words=words.map(function(y){
return y.toUpperCase();
})
console.log(new__Words)

console.log("Question 7")

const heros = [
   {name: 'Iron Man', power: 'Tech'},
  {name: 'Spider-Man', power: 'Spider abilities'},
  {name: 'Thor', power: 'Godly powers'},
  {name: 'Hulk', power: 'Super strength'}
];

const new__Hero = heros.map((hero, index) => {
  return {
    id: index,
    hero: hero.name,
    power: hero.power
  };
});

console.log(new__Hero);

console.log("Question 8");

 const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
let new__Input__Word=inputWords.filter(function(ele){
if (ele.length>=7) {
  return ele
}
})
console.log(new__Input__Word)

console.log("Question 9");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let new__Number=numbers.filter(function(ele1){
if (ele1 % 2 !=0) {
  return ele1
}
})
console.log(new__Number);

let new__Number1=numbers.filter(function(ele2){
if (ele2 % 2==0 || ele2 % 5==0) {
  return ele2
}
})
console.log(new__Number1);

let new__Number2=numbers.filter(function(ele3){
 return ele3 % 3==0
  })
  let new__Number3=new__Number2.map(function(ele3){
return ele3 ** 2
  })
  console.log(new__Number3);

  let divisable=numbers.filter(function(div5){
return div5 % 5==0
  })
  let square=divisable.map(function(div5){
return div5 ** 2
  })
  let sum=square.reduce(function(div5,cur){
return div5 + cur
  })
  console.log(sum)


  console.log("Question 10");
  let nums = [11, 22, 33, 46, 75, 86, 97, 98];

let even=nums.filter(function(Num__Even){
return Num__Even % 2==0
})
let square__Even=even.map(function(Num__Even){
  return Num__Even **2
})
console.log(square__Even);
let sum__nums=nums.reduce(function(acc,cur1){
return acc +cur1
})
console.log(sum__nums);
console.log("Question 11");
let countries = ['India', 'United States', 'Russia', 'Japan', 'China'];
let name__countries=countries.filter(function( char__Name){
return char__Name.charAt(0)!='U'&&char__Name.charAt(0)!='R'
})
console.log(name__countries);

let upper__Countries=name__countries.map(function(char__Name){
return char__Name.toUpperCase();
})
console.log(upper__Countries);

let total__Char=upper__Countries.reduce(function(char__Name,cur2){
return char__Name +cur2.length
},0)
console.log(total__Char);
console.log("Question 12");

const greater__numbers = [12, 45, 67, 89, 23, 56, 73, 99, 100];
let new__Greater__Numbers=greater__numbers.filter(function(greater){
return greater>50;
})
console.log(new__Greater__Numbers);
