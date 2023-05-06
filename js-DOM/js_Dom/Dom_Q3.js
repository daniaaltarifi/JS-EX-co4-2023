function AddItem(list){
    let item=document.getElementById('inputText').value;
 let li=document.createElement('li');
 let rule=document.createTextNode(item);
li.appendChild(rule);
document.getElementById('list').appendChild(li);
let btnRemove=document.createElement('input');
btnRemove.value='Remove'
btnRemove.type='button';
btnRemove.onclick=remove;
li.appendChild(btnRemove);
}
function remove(r) {
  var removeItem = r.target;
  removeItem.parentNode.remove();
}

    window.onload = function() {
        document.getElementById("inputText").focus();
      }
