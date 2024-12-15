//only 2 types of datatypes : primitive(pass by value) and non primitive(pass by refernece) 

//primitive : string , Number , bool , Null , undefined , Symbol , BigInt

//Non-primitive : Arrays , Objects , Functions 

//wE'LL SEE typeof OF ALL DATATYPES

let num = 123;

let str = "Yahyaa";

let arr = ["yahyaa","ashhar","pulkit"];

let myObj = {
    name : "Yahyaa",
    age:22
}

const myfunc = Function()
{
    console.log("inside function 1")
}

const nullValue = null;

//let's check
const data = [
    { Variable: "num", Type: typeof num }, //output : number 
    { Variable: "str", Type: typeof str }, //output : string 
    { Variable: "arr", Type: typeof arr }, //output : object 
    { Variable: "myObj", Type: typeof myObj }, //output : object 
    { Variable: "myfunc", Type: typeof myfunc }, //output : function
    { Variable: "nullValue", Type: typeof nullValue } //output : object 
  ];
  
  console.table(data);

  console.log(typeof undefined)
