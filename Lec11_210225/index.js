// let studentA ={
//     firstName:"Sahil",
//     lastName:"Sharma"

    // getName:function(){
    //     console.log(this.firstName+" "+this.lastName);
    // }

    // getResult:function(){
    //     console.log("Failed")
    // }
// }



// let studentB ={
//     firstName:"Mohit",
//     lastName:"Saini",

// }

// let getName=function (classStudent){
//     console.log(this.firstName+" "+this.lastName+" from "+classStudent);
// }

// var print = student1.firstName+" "+student1.lastName;
// console.log(print);
// student1.getResult();

// getName.call(student2);

// const getStudent1= getName.call(studentA,"G16,G12");
// const getStudent2= getName.apply(studentB,["G16,G17,G18"],["G22"]);
// const getStudentBind = getName.bind(studentA,"G16");
// console.log(getStudentBind());

// console.log(getStudent1);



//=======================================================================================

//Event Bubbling, Event Capturing


// document.getElementById("grandparent").addEventListener("click",(e)=>{
//     console.log("This is Grandparent div");
//     e.stopPropagation();
// },)


// document.getElementById("parent").addEventListener("click",(e)=>{
//     console.log("This is parent div");
//     e.stopPropagation();
// },)


// document.getElementById("child").addEventListener("click",(e)=>{
//     console.log("This is child div");
//     e.stopPropagation();
// },)



// document.getElementById("sub1").addEventListener("click",()=>{
//     window.location.href="localhost/sub1"
// })

// document.getElementById("sub2").addEventListener("click",()=>{
//     window.location.href="localhost/sub2"
// })

// document.getElementById("sub3").addEventListener("click",()=>{
//     window.location.href="localhost/sub3"
// })

// document.getElementById("sub4").addEventListener("click",()=>{
//     window.location.href="localhost/sub4"
// })

// document.getElementById("subjects").addEventListener("click",(e)=>{
//     console.log(e)
//     window.location.href=e.target.id;
// })



//===========================================================================
//Debouncing


document.getElementById("searchbox").addEventListener("input",debouncingfunction);

let whichCall=0;
let timeout=0;
function fetchData(){
    console.log("Fetching API Data",whichCall++)
}

function debouncingFunction(){
    clearTimeout(timeout);
    timeout=setTimeout(fetchData,2000);
}


