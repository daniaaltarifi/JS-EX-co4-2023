// Question 1
var age=27;
if(age>18){
    console.log("You are an adult");
}
else{
    console.log(" ");
}
// Question 2
var score =45;
if (score<=50){
    console.log("You failed the test");
}
// Question 3
var name= "John";
if(name = "john"){
    console.log("Hello, " +name)
}
// Question 4
var day = "Monday";
if(day =="saturday" || day == "sunday")
{
    console.log("It's a not weekday");
}
else{
    console.log("It's  a weekday ");
}
// Question 5
var num = 4;
if (num % 2 == 0){
    console.log("The number is even");
}
else
console.log("The number is odd");
// Question 6
var char='a';
if(char .charAt(0)=="a"){
    console.log("It's a letter");
}
else{
console.log("It's not a letter");}
// Question 7
var arr =[1,2,3];
if(Array.isArray(arr))
console.log("True")
else
console.log("False")
// Question 8
var x = "+5";
if( x.startsWith(x))
console.log("Is a positive number")
// Question 9
var y ="-5";
if (y.startsWith("-"))
console.log("Is a negative number");
// Question 10
var z=9;
if (z % 3 == 0) {
    console.log("z is a multiple of 3");
  }
// Question 11
var gpa=3.5;
if (gpa>= 3.00)
console.log("Congratulations, you have a good GPA!")
// Question 12
var password="mypassword123"
if(password.length>=8)
console.log("Your password is strong")
// Question 13
var age2= 30;
if(age2 >=18 && age2 <= 65)
{console.log("You are of working age");}
// Question 14
var color = ["red","green","blue"]
if(color.includes("red"))
console.log("color is a primary color")
// Question 15
function isNumber(n){
    if(isNaN(n))
    console.log("Its Not a valid Number")
    else{
        console.log("Its a valid Number")
    }
}
isNumber(123);
isNumber ("19");
isNumber("xyz");
isNumber("17.5");
isNumber("21f");
