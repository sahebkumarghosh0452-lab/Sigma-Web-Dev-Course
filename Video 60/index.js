console.log("This is strings tutorial")
let a = "Harry";
console.log(a); // Its print the a completely not only thr base address 
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]); - If the ";" is removed then no error is shown for js 

console.log(a.length)
// "name" is a globally declared var so don't use it  
let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
//Templete literal 
console.log(`His name is ${real_name} and his friends name is ${friend}`) // ${} - is called str interpulation 

// "Roh\"an" - prints = Roh"an or `Roh"an` - prints the same 

let b = "ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) // substr if only single digit is given then ut return the str starting form the given digit 
console.log(b.slice(1)) 

// learn these in console panel of browser 

console.log(b.replace("Sh", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya")) // we  can use + 
console.log(b.trim()) ; - removes white space 
// str is immutable in js we have to make a new str to store these values 

console.log(b)

// Yeah use nahi karna hai  
alert(`The rlt ${eval(`${a} ${c} ${b}`)}`) //This func evaluate the ecpression as in c their is an operstiom 
