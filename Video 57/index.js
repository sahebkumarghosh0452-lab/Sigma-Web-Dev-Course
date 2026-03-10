// Early JS packed values into 32 bits: tag + payload.
// Tag 000 meant “object”; payload was a pointer.
// null = object tag + NULL pointer (0).
// typeof only read the tag → "object".
// Historical bug; fixing it would break the web.
// Use strict equality or Object.prototype.toString.call() for reliable null checks.

 
console.log("I am a tutorial on Loops")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

for (let i = 0; i < 100; i++) { 
    console.log(a + i); 
}

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}
 
for (const key in obj) {  //This is used in using obj (for in)
        console.log(key)
}

for (const c of "Harry") {  //for strings and arrays 
    console.log(c)
}

let i = 0;
while (i<60000) { //condi and run 
    console.log(i)
    i++;
}

let i = 10;
do {  //At least once 
    console.log(i)
    i++;
} while (i<6);
