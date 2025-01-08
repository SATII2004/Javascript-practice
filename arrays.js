/*
let arr=["Fan","Camera",34,null,true];

 // Array Methods

 console.log(arr.length);

 arr.shift();

 

 console.log(arr);



 const newLen = arr.unshift("HII");

console.log(newLen);
 console.log(arr);

 d=[1,4,6,43,34224];

 console.log(d);

 d.sort();

 console.log(d);



 // String methods

 let str = "Hii bro how are you?";

console.log(str.length);
console.log(str.indexOf("bro"));
console.log(str.slice(1,3));

console.log(str.replace("Hii","Halo"));

*/
let num=[1,2,3,4,7]

let b= num.toString()

console.log(b,typeof b)

let c= num.join("_")

console.log(c, typeof c)


// Map method

let marr = [45,23,29]

marr.map((value,index,array) =>{
    console.log(value,index,array)
})



//Filter method

let marr2 = [23,1,4,90,83,0,76]
let a2 = marr2.filter((value)=>{
    return value<10
})

console.log(a2)


//Reduce method

let n = marr2.reduce((i,j)=>{
    return i+j
})

console.log(n)