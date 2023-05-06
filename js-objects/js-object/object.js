console.log("Question 1")
let object= { name: "Adam", age: 25, gender: "male" };
console.log(object.name)
console.log(object.age)
console.log(object.gender)
console.log("Question 2")
let object2={ name: "Adam", age: 25}
object2.gender="male"
console.log(object2)
console.log("Question 3")
let object3={ name: "Adam", age: 25}
object3['gender']="male"
console.log(object3)
console.log("Question 4")

console.log(object3.name)
console.log("Question 5")
for (let key in object) {
   console.log(key+":"+object[key])
}
console.log("Question 6")
console.log(Object.keys(object))
console.log("Question 7")
console.log(Object.values(object))
console.log("Question 8")
console.log(Object.entries(object))
console.log("Question 9")
let assign1={ name: "Adam", age: 25}
let assign2={gender:"male"}
console.log(Object.assign(assign1,assign2))
console.log("Question 10")
Object.freeze(assign1);
assign1.name="Ali"
console.log(assign1)
console.log("Question 11")
let seal={ name: "Adam", age: 25 }
Object.seal(seal)
seal.name="Ali"
console.log(seal)


console.log("Exersice 3 in 1")
console.log("Exersice  1")

function properities(obj){
console.log(Object.keys(obj)
)
}
properities({ name: "Adam", age: 25 })
console.log("Exersice  2")

function reciveNum(objReceive){
    let receiveNew=Object.keys(objReceive)
    let counter=receiveNew.length
    console.log(counter)
console.log(Object.values(objReceive)
)}
reciveNum({num1:1,num2:2,num3:3})
console.log("Exersice  3")
function mergeAssign(objMerge1,objMerge2)
{
console.log(
    Object.assign(objMerge1,objMerge2)

)}
mergeAssign({ name: "Adam", age: 25 },{gender:"male"})

console.log("Exersice  4")
function copyobj(upperObj){
    for (const y in upperObj) {
       let upper=upperObj[y].toUpperCase();

console.log(upper)

    }
}
copyobj({ name: "Adam", gender: "male" })
console.log("Exersice  5")
function notNullObj(nullobj){
for (const z in nullobj) {
    if (nullobj[z]=="null"){
        console.log("null")
    }
    else (nullobj[z]!="null")
    {
      console.log( Object.values(nullobj))
   }
}
}

notNullObj({ name: "Adam", gender: "male" })
console.log("Exersice  6")
function sortObj(arrSort){
let newSort=Object.keys(arrSort)
let newArrSort=newSort.sort()
console.log(newArrSort)
}
sortObj({ name: "Adam", gender: "male" })