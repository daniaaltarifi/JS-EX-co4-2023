let cursor=    document.querySelector('.text__Class');
let score__Cursor=document.querySelector('.score__Class')
window.addEventListener('load',function(){
    window.onload=score__Cursor.focus();
    window.onload = cursor.focus();

    
})

let arr__Names=["Dania","Ben","Joel","Judy"];
let arr__Score=[80,88,98,77];
function display__Result(){
    let sum=0
    let avg=0;

    for (const key in arr__Score) {
     sum+=arr__Score[key]
     avg=sum/arr__Score.length
    }
    let h1Text=document.getElementById('resultH1');

    let h1=document.createElement('h1');
    let textH1=document.createTextNode('Result');
    h1Text.appendChild(textH1);

    let p_avg_score=document.getElementById('avg__Score');
let p2=document.createElement('p')
let text__Of__p2=document.createTextNode('Average Score =');
p_avg_score.appendChild(text__Of__p2);
    //create p and when click btn appear this p
let avg__score__Target=document.getElementById('avg__Result');
let p4=document.createElement('p');
let text__Of__p4=document.createTextNode(avg);
avg__score__Target.appendChild(text__Of__p4);


//highest score
let higher=document.getElementById('High__Score')
let p_higher=document.createElement('p');
let text__P_higher=document.createTextNode("High Score");
higher.appendChild(text__P_higher);
let max=0
for (const i in arr__Score) {
    if (max<arr__Score[i]) {
max=arr__Score[i];        
    }
}
let high__Avg__target=document.getElementById('high__Avg');
let p5=document.createElement("p");
let text__P5_higher=document.createTextNode(max);
high__Avg__target.appendChild(text__P5_higher)

}
function  display__Score(){
  
    for (const x in arr__Names) {
        console.log(arr__Names[x])
    
    }
    let name__td=document.getElementById("name__td1");
    let new__td__name=document.createElement('td');
    let text__td__name=document.createTextNode(arr__Names[0]);
    name__td.appendChild(text__td__name);

    let name__td2=document.getElementById("name__td2");
    let new__td2__name=document.createElement('td');
    let text__td2__name=document.createTextNode(arr__Names[1]);
    name__td2.appendChild(text__td2__name);

    let name__td3=document.getElementById("name__td3");
    let new__td3__name=document.createElement('td');
    let text__td3__name=document.createTextNode(arr__Names[2]);
    name__td3.appendChild(text__td3__name);

    let name__td4=document.getElementById("name__td4");
    let new__td4__name=document.createElement('td');
    let text__td4__name=document.createTextNode(arr__Names[3]);
    name__td4.appendChild(text__td4__name);

    for (const y in arr__Score) {
        console.log(arr__Score[y])
       
    }
    let td=document.getElementById("td1");
    let new__td=document.createElement('td');
    let text__td=document.createTextNode(arr__Score[0]);
    td.appendChild(text__td); 

    let td2=document.getElementById("td2");
    let new__td2=document.createElement('td');
    let text__td2=document.createTextNode(arr__Score[1]);
    td2.appendChild(text__td2); 

    let td3=document.getElementById("td3");
    let new__td3=document.createElement('td');
    let text__td3=document.createTextNode(arr__Score[2]);
    td3.appendChild(text__td3); 

    let td4=document.getElementById('td4');
    let new__td4=document.createElement('td');
    let text__td4=document.createTextNode(arr__Score[3]);
    td4.appendChild(text__td4);

}

function add__Score(){
    // let check=document.getElementsByClassName('text__Class').value;
    let add__Name = document.getElementById("text").value;
    let add_Score=document.getElementById('score').value;

    if (add__Name=="") {
        alert('You must enter name and valid score')   
     }
    else
    {
    let new__add__name=arr__Names.push(add__Name);
    console.log(add__Name);
    }

    if ( add_Score < 0) {
        alert('You must enter name and valid score')   
    
     }
     else
     {
        arr__Score.push(add_Score);
        console.log(add_Score)
     }

}




