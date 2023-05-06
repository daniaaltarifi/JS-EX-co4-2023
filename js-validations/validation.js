
function validate() {
    let userArr = ["Dania", "Ahmad", "Ali"];
    let passArr = [1234, 5678, 9125];
    let userName = document.getElementById("textId").value;
    let password = document.getElementById("passwordId").value;
    let matchFound = false;
  
    for (let index = 0; index <= 2; index++) {
      if (userName === userArr[index] && password == passArr[index]) {
        matchFound = true;
        break;
      }
    }
  
    if (matchFound ==true) {
      alert("Welcome"+" "+userName);
    } 
    else {
        alert("Invalid UserName Or Password");
    }
  }
  
  
  
  
  
  
  