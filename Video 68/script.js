console.log("Harry")

// let boxes = document.getElementsByClassName("box") - get the ele with a given "id" attribute  
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box")) //- returns al ele inside as ele matching the given css selector 

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 

document.querySelector 
let c = document.getElementsByTagName("div") //returns with the given tag name 
document.getElementsByClassName
c[0].matches
c[0].closest
c[0].contains  