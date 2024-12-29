let btn1=document.querySelector("#btn1");


/* 
// USING ARROW FUNCTION

 btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a= 23;
    a++;
    console.log(a);
    console.log(a.type);

};

 */

btn1.addEventListener("click", () => {
    console.log("Button was clicked");
});


let  modeBtn = document.querySelector("#mode");
let currMode="light";
modeBtn.addEventListener("click",()=>{
    if(currMode=="light")
    {
        currMode="dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";

    }

    console.log(currMode);
});