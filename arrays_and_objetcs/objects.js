
//sigleton

//object literals (not a singleton)  
let myObj = {
    name:"Yahyaa",
    age : 22 ,
    college : "Galgotias College of Engineering and Technology"
}

console.log(myObj["name"])

console.log(myObj.name)

//INTERVIEW QUESTION 

//use symbol as key

let mySym = Symbol("myKey1");

let myObj2 = {
    name:"Yahyaa",
    age : 22 ,
    [mySym] : "myKey1",  // use this syntax
    college : "Galgotias College of Engineering and Technology"
}

console.log(typeof myObj2[mySym])

myObj2.age = 21;
//Object.freeze(myObj2) //locks this value for the age

myObj2.age = 23;

console.log(myObj2.age) //age is still 21

console.log(myObj2)

/************************************************************** */

//add functions

myObj2.greeting = function()
{
    console.log("Hello User")
}

console.log(myObj2.greeting());

myObj2.greeting2 = function()
{
    console.log(`Hello , this is ${this.name}`)
}

console.log(myObj2.greeting2())



/*************************************************************** */

//nested objects

const regularUser = {
    email:"some@gmail.com",
    fullname : {
        firstName:"Yahyaa",
        lastName : "Khan"
    }
}

console.log(regularUser.fullname?.firstName)

const newUser1 = {
    1 : "abc",
    2 : "def",
    3 : "ghi"
}

const newUser2 = {
    4 : "jkl",
    5 : "mno",
    6 : "pqr"
}

//concat 
const allUser = Object.assign({},newUser1,newUser2); // merges all into {}
console.log(allUser)

let arr = [
    {
        name:"Yahyaa",
        age:22,
        id:34567
    },
    {
        college:"Galgotias",
        city:"Greater Noida"
    }
]

console.log(arr[1]?.city)
console.log(Object.keys(newUser1)) //get all keys in a array
console.log(Object.values(newUser1))

console.log(newUser1.hasOwnProperty('7')) // check if a key exists in the object 

/*********************************************************** */
//DeStructuting

let newUser4 = {
    a:"yahyaa",
    b:"ali",
    c:"simrah"
}

const { a , b } = newUser4;
console.log(`${a} and ${b}`)




