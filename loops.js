var arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr);

for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}


console.log("------------------------------------------");

arr.forEach(function(element)
{
    console.log(element);
});


let j=0;
const m =19;

console.log("-------------------------------------");


while(j<arr.length)
{
    console.log(arr[j]);
    j++;
    
}

console.log("----------------------------------------");
j = 0; 
do {
    console.log("HII " + arr[j]);
    j++;
} while (j < arr.length); 
