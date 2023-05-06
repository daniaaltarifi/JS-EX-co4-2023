let div=document.createElement("div");
div.id='content';
document.body.appendChild(div);
let h1=document.createElement('h1');
h1.id='colorRed'
 h1.textContent='About me';
div.appendChild(h1);
let h2=document.createElement("h2");
h2.id='greenColor'
h2.textContent='Dania Al-Tarifi'
div.appendChild(h2)
let h3=document.createElement('h3');
h3.textContent='computer information';
div.appendChild(h3)
let change=document.getElementById("colorRed");
change.style.color="red"
// change.appendChild(div)
document.getElementById('change').onclick=function(){
    document.getElementById('greenColor').style.color='blue'
}
