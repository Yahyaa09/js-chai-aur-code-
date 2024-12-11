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
 console.log(splittedUrl)