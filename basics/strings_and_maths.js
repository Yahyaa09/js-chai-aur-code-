 // use backticks 
 let name = "Chaubey"
 let age = 21 
 console.log(`My name is ${name} and i am ${age} years old`)

 console.log(name.length)
 console.log(name.charAt(2))

 let newstr = name.substring(1,5)
 console.log(newstr)

 let newstr2 = name.slice(0,5) // better susbtring can deleet from front back all (staetIndex,endIndex) if(anyindex is -ve then count from back)
 console.log(newstr2)

 let newstr3 = "   Yahyaa   ";
 console.log(newstr3)
 console.log(newstr3.trim()) // remove blank spaces

 //REPLACE METHOD
 let url = "yahyaa %20@ gmail .com";

 let newUrl = url.replace('%20','');

 console.log(newUrl)

 ///SPLIT METHOD

 let splittedUrl = newUrl.split(' ')
 console.log(`This is splittedUrl : ${splittedUrl}`)

 //************************************  MATHS  ***********************************
 let score = new Number(200)

 console.log(score.toString().length) // conversion

 console.log(score.toFixed(2))  // to 2 decimal place

 let num =10000000;

 console.log(num.toLocaleString('en-IN')) //add commas in num

 //ceil floor min max etc

 let num2 = 23456

 console.log(Math.random()) //values between 0 and 1

 console.log(Math.floor(Math.random()*10) + 1) // this will be greater than 1 always


//to generate a random integer between a and b
let max = 20
let min = 10

console.log(Math.floor(Math.random() * (max - min + 1) + min))


