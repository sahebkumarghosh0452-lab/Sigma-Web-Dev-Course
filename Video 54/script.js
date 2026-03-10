// The server js that is runned by node . js  just dont have some browser specific version of js that is used or runned in brosers 
alert("Hello World"); // Browser specific 

console.log("Code is running...")
console.log("Code is also running...")
console.log("Code is looking like a wow...")

console.log(val1, /* …, */ valN) // To print same for other data type (except str)
console.log(msg, subst1, /* …, */ substN) //To add subsequent strings in single static output 

var a = prompt("Enter your number") // Give a section to enter a value in a  // Browser specific 

var isTrue = confirm("Are you sure you want to leave this page and blast your computer ") // yeah ohk waala statement deta hai  // Browser specific 


if(isTrue){
    console.log("Computer is blasting")
}
//Node js is a software made by an engineer who just take all elements from browers which used by js and compile them into a file node js  
else{
    console.log("Computer is not blasting")

}
console.log("Your number is " + a)

document.title = "Hey I am good"

// document.body.style.backgroundColor = "red"
