
let myArr = ["yahyaa","khushi","simrah","ashhar"];
myArr.push("maaz");

console.log(myArr);

myArr.pop();

console.log(myArr);

/***********************************************/

// TO INSERT INTO START ( try to avoid as it is time consuming)
myArr.unshift("Ammi")
console.log(myArr);

//POP FROM BEGINNING
myArr.shift();
console.log(myArr);

/********************************************/


//CONVERT ARRAY TO string use join()
let newArr = [1,2,3,4,5];

let changedArr = newArr.join().replace(',',' '); //replaces first occurence 

let changedArr2 = newArr.join().replace(/,/g,''); // replcae all occurences of " , " with " "

let nums = Number(changedArr2) // changed strign to number

console.log(newArr);
console.log(changedArr2);
console.log(typeof nums);

//********************************************* */

//SLICE AND SPLICE

let slicedArr = myArr.slice(0,2);
console.log("THIS IS SLICE ACTION")
console.log(slicedArr); 
console.log(myArr);

//IMPORTANT
let arr = [1, 2, 3, 4, 5, 6];
let spliced = arr.splice(1, 4); // Remove 4 elements starting from index 1


console.log("THIS IS SPLICE ACTION")
console.log(spliced);  // Removed elements: [2, 3, 4, 5]
console.log(arr);   

//SO THE ORIGINAL ARRAY IS AFFECTED OR CHANGED PERMANENTLY IN SPLICE ASLO SPLICE INCLUDES THE LAST INDEX TOO 

/********************************************************/


//Arrays can take any type of data in JS 
let arr1 = ["Yahyaa","Khushi","Ashhar",1,true];
let arr2 = ["Maaz","Shubham","Pulkit"];


let arr3 = arr2.concat(arr1); //This returns a New Array

console.log(arr3);

//USE SPREAD OPERATOR ( makes shallow copies )
let arr4 = [...arr1,...arr2];
console.log(arr4);

let arr5 =[8,9,10,...arr1];
console.log(arr5);

/**************************************************** */

let layredArr = [1,2,3,[4,5,[6,7,8]]];

//flatten or concat all elements into one array

let flattenedArr = layredArr.flat(Infinity) //give depth in arg

console.log(flattenedArr)


//Check if somethign is an array

console.log(Array.isArray("yAHYAA"));

console.log(Array.from("Yahyaa")); //make array

console.log(Array.from({name : "Yahyaa"}));  // returns [] when it cant convert into array]

let num2 = 100;
let num3 = 200;
let num4 = 300;


let newArray = Array.of(num2,num3,num4); //returns new array with combined values
console.log(newArray);





