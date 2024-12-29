let ele = document.getElementById('click');
console.log(ele);

document.getElementById('click').style.border='2px solid green';

let e = document.getElementsByClassName("container");

console.log(e);

// e[0].style.background = "green";

e[0].classList.add("bg-primary");

e[0].classList.add("text-success");

/* console.log(ele.innerHTML);

console.log(ele.innerText);



console.log(e[0].innerHTML);

console.log(e[0].innerText); */


tn= document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a inner para";

tn[0].appendChild(createdElement); 

console.log(document.title);


//Selecting uaing query

sel= document.querySelector('.container');
console.log(sel);




// Events in JAVASCRIPT

function clicked()
{
    console.log("The button was clicked.");
}

window.onload=function()
{
    console.log("The document was loaded!");

}

/* firstContainer.addEventListener('click',function()
{
    document.querySelectorAll('.container')[1].innerHTML= prevHTML;
    console.log("Click hua");
})


firstContainer.addEventListener('mouseover',function()
{
    console.log("Mouse on container");
})

firstContainer.addEventListener('click',function(){
    document.querySelectorAll('.container')[1].innerHTML  = "<b> We have Clicked </b>"
    console.log("Clicked on container");
}) */


let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup',function()
{
    document.querySelectorAll('.container')[1].innerHTML= prevHTML;
    console.log("Mouse up when clicked on Container.");
})




firstContainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML  = "<b> We have Clicked </b>"
    console.log("mouse down when Clicked on container");
})