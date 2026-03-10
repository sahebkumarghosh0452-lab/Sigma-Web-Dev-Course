console.log("Hey this is tutorial 55");
//var - updated and re-declared 
var a = 5; // automatically detect the data type  - Global scope  
// a = a + 1
//Rules - letters , underscore and $ allowed for starting a var but digitts are not alllowed while starting a var
//LET - updated but can't redeclared 
let b = 6; //Local var initialized for particular block 
let c = "Harry";
let _a = "Shubham";
// var 55a = "Rohan"; // Not Allowed

// console.log(a +  b + 8);
// console.log(typeof a, typeof b, typeof c);
{
    // let a = 66;
    console.log(a)
}
console.log(a)
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant


let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null; //OBJECT   //Due to stack overflow is depend on older code base where null is defined as obj so it can't be changed  

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


let o = { //OBJ 
    "name": "Harry",
    "job code": 5600,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores"; //Addon statement in javascript 
console.log(o);
o.salary = "500crores";
console.log(o);
