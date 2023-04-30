for (let m = 1; m <= 50; m++) {
  if (m % 2 == 0) {
    console.log(m);
  }
}

console.log("////////////");
let m2 = 1;
while (m2 <= 50) {
  if (m2 % 2 == 0) {
    console.log(m2);
  }
  m2++;
}
console.log("////////////");
for (let m = 1; m <= 50; m++) {
  if (m % 2 == 0) {
    console.log(m);
  }
}
console.log("////////////");

for (let odd = 1; odd <= 50; odd++) {
  if (odd % 2 != 0) {
    console.log(odd);
  }
}
console.log("////////////");
for (let num = 1; num <= 100; num++) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}
console.log("/////////");
function FizzBuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}
FizzBuzz(1);
FizzBuzz(15);
console.log("//////");
function recursiveFizzBuzz(number) {
  if (number == 0) {
    return;
  }
  recursiveFizzBuzz(number - 1);
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}
recursiveFizzBuzz(100);
console.log("/////////////");
function banknotes(amount, total) {
  if (amount == 0) {
    return [];
  } else {
    if (amount >= total[0]) {
      let left = amount - total[0];
      return [total[0]].concat(banknotes(left, total));
    } else {
      total.shift();
      return banknotes(amount, total);
    }
  }
}
console.log(banknotes(57, [25, 10, 5, 1]));
console.log("/////////////");
function coding(text, char) {
  let count = 0;
  for (let index = 0; index <= text.length; index++) {
    if (text[index] === char) {
      count++;
    }
  }
  return count;
}
console.log(coding("codings academy by orange", "o"));
console.log("/////////////");
// Question 9a
for (let numbers = 0; numbers <= 20; numbers++) {
  console.log(numbers);
}
console.log("/////////////");
// Question 9b
for (let odd = 0; odd <= 29; odd++) {
  if (odd % 2 != 0) {
    console.log(odd);
  }
}
console.log("/////////////");
// Question 9c
for (let m = -14; m <= 12; m++) {
  if (m % 2 == 0) {
    console.log(m);
  }
}
console.log("/////////////");
// Question 9d
for (let multiple = 50; multiple >= 20; multiple--) {
  if (multiple % 3 == 0) {
    console.log(multiple);
  }
}
console.log("/////////////");
// Question 10
var string = "coding academy";
var arr = [7, 500, "KH404", "black", 36];
for (let num_arr = 0; num_arr < arr.length; num_arr++) {
  console.log(arr[num_arr]);
}

for (let char = 13; char >= 0; char--) {
  console.log(string[char]);
}
console.log("/////////////");
// Question 11
var loop_arr = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
console.log(
  "Sorted array [" +
    loop_arr.sort(function (a, b) {
      return a - b;
    }) +
    "]"
);
var even_arr = [];
var odd_arr = [];
for (let numeric = 0; numeric <= 9; numeric++) {
  if (loop_arr[numeric] % 2 == 0) {
    even_arr.push(loop_arr[numeric]);
  } else {
    odd_arr.push(loop_arr[numeric]);
  }
}
console.log("The even number [" + even_arr + "]");
console.log("The odd number [" + odd_arr + "]");
console.log("/////////////");
// Question 11
var protien = ["chicken", "pork", "tofu", "beef", "fish", "beans"];
var grain = ["rice", "pasta", "corn", "potato", "quinoa", "crackers"];
var vegetables = ["peas","green beans","kale","edamame","broccoli","asparagus"];
var beverage = ["juice", "milk", "water", "soy milk", "soda", "tea"];
var deserts = ["apple","banana","more kale","ice cream","chocolate","kiwi"];
var count = 0;
while (count <= 4) {
  for (let test = 0; test <= 5; test++) {
    if (test == 0) {
      function getRandomItem(protien) {
        const randomIndex = Math.floor(Math.random() * protien.length);
        const item = protien[randomIndex];
        return item;
      }

      var meals = getRandomItem(protien);
      console.log("[" + meals);
    } else if (test == 1) {
      var meals = getRandomItem(grain);
      console.log(meals);
    } else if (test == 2) {
      var meals = getRandomItem(vegetables);
      console.log(meals);
    } else if (test == 3) {
      var meals = getRandomItem(beverage);
      console.log(meals);
    } else if (test == 4) {
      var meals = getRandomItem(deserts);
      console.log(meals + "]");
    }
  }
  count++;
}
