let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

// arr in js can be of diff datatype under a single var 
// arra are onj in js 

arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))
a.pop() ; - take out the last ele of the arr 
a.push(100) ; - add 100 at the end of the arr 
a.shift() - remove an ele from begin of arr 
a.unshift("Hello") ; - add Hello at the start of the arr 
delete(a[2]) - asign undefined at a[2] 
a1.concat(a2,a3)  ; - it add a2 and a3 and assign it to the a1 
a.sort([7,8,8]) - modifies the original arr and sort the following 
// sort also takes a compare function that can be used to return the sorted value according to the function 



 
// let numbers = [1, 2, 3, 4, 5] 
numbers.splice(1, 2)    
numbers.splice(1, 3)  // return the deleted ele from arr from start and end index 
numbers.splice(1, 3, 222, 333) 
(4) [1, 222, 333, 5]
