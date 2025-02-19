

// let green= document.getElementById("green");
// let yellow= document.getElementById("yellow");
// let red= document.getElementById("red");
// let sky = document.getElementById("sky");
// let black = document.getElementById("black");


// green.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });



let color = document.querySelectorAll('li');


color.forEach((color)=>(color.addEventListener('click',()=>{
    document.body.style.backgroundColor=color.id;
})));

//there is a call back funcction in forEach and inside that function we added evet listener which consists of
//one event and another function


// color.forEach((color)=>color.onclick=()=>{console.log(color.id)});

//adding something to push into git through vs code terminals