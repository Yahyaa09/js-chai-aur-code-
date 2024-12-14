
//sigleton

//object literals (not a singleton)  
let myObj = {
    name:"Yahyaa",
    age : 22 ,
    college : "Galgotias College of Engineering and Technology"
}

console.log(myObj["name"])

console.log(myObj.name)

let mySym = Symbol("myKey1");

let myObj2 = {
    name:"Yahyaa",
    age : 22 ,
    [mySym] : "myKey1",
    college : "Galgotias College of Engineering and Technology"
}

console.log(typeof myObj2[mySym])

myObj2.age = 21;
//Object.freeze(myObj2) //locks this value for the age

myObj2.age = 23;

console.log(myObj2.age) //age is still 21

console.log(myObj2)

