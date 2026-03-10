//terminal can be opened as a program in vs code 
console.log("Hello I am conditional tutorial")
//null is def as obj as in 1995 the js is dev in a hurry so the obj and null have same tag just different pointers so its gaves the same name as obj 
let age = 1;
// let grace = 2;

// age += grace
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace) - EXPONENTIAL operator 
// console.log(age % grace)

/*
I am a 
multiline 
comment
*/

// js can be run as rapple in powershell by using "node" cmd 

// += , --, ++ , -= , /= , **= same as other prog lang 

if (age == 18) {
    console.log("You can drive");
}
    // == - comapre only value not type e.g :- "3" == 3 - TRUE 
// === - compare value and type 
else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}


a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/
