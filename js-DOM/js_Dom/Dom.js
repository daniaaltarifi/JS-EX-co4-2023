// let div=document.createElement('div');
// div.id='content'
// let p=document.createElement('p')
// p.textContent=("UserName");
// div.appendChild(p)
// let input=document.createElement('input');
// input.id='req'
// div.appendChild(input)

// document.body.appendChild(div);
// let p2=document.createElement('p');
// p2.textContent='Password';
// div.appendChild(p2);
// let input1=document.createElement('input');
// div.appendChild(input1)
// // input1.setAttribute("required",true)
// let p3=document.createElement('p');
// p3.textContent='Confirm Password';
// div.appendChild(p3)
// let input2=document.createElement('input');
// div.appendChild(input2)
// // input2.setAttribute("required",true)
// let button=document.createElement("button");
// button.textContent="Login";
// document.body.appendChild(button)
javascript:void(0);
// exersice 1
function validatePassword() {
    const passArr =["1234", "5678", "9123"];
    const confirmArr =["1234", "5678", "9123"];
    const userName=document.getElementById('textId').value;
    const newPassword = document.getElementById('passwordId').value;
    const confirm = document.getElementById('confirmId').value;
    let isValid = false;
    if (userName=="") {
        alert('You should enter the UserName')
    }
    else
    console.log("")
if (newPassword=="") {
    alert('You should enter the password')
}
else
console.log("")
if (confirm=="") {
    alert('You should enter the confirmPassword')
}
else
console.log("")
    for (let i = 0; i < passArr.length; i++) {
        if (newPassword === passArr[i] && confirm === confirmArr[i]) {
            isValid = true;
            break;
        }
    }

    if (isValid) {
        alert('Welcome!');
        alert(' successful user registration')
    } else {
        alert('Invalid password or confirmation.');
        
    }
}
// exersice 2
function changeColor(){
  
       let colors= document.getElementById('paraId');
       const words = colors.textContent.split(' ');
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 8) {
      words[i]='<span style="background-color: yellow;">' + words[i] + '</span>';
    }
    
  }
  colors.innerHTML = words.join(' ');
    
}


console.log("exersice 3")
function separate(){
var text = document.body.innerText;
var sentences = text.split('.');
var lines = [];
for(var i = 0; i < sentences.length; i++) {
    lines.push(sentences[i].trim());
}
var newText = lines.join('.\r\n');
}
// exersice 4
// function count(){
//     let pargraph=document.querySelector('.paraClass');
//     let counter=counter.length;
// console.log(counter)  

// for (let i = 0; i < division.length; i++) {
//     counter++;
// }
// console.log(counter)
// }
    