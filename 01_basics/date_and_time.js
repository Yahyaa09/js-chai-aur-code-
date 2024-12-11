let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(typeof mydate)

let newDate = new Date(2023,0,23) // months start with 0 index
let newDate2 = new Date(2002,10,21,5,30)
console.log(newDate.toDateString())
console.log(newDate2.toString())

let timeStamp = Date.now();
console.log(timeStamp) // time from 1 jan 1970 to this instant in ms

console.log(newDate2.getTime()) 

console.log(Math.floor(Date.now()/1000)) // GET VALUE IN SECONDS VERY INTERVIEW SPECIFIC

let newDate3 = new Date()