// function a(){
//     console.log("Fn a");
// }

// function b(x){
//     console.log("Fn b");
//     a();
// }

// b();


//Event Listener
// var count=0;

// document.getElementById("btn").addEventListener('click' ,function(){
//     count++;
//     console.log("Finished");
// })

// document.getElementById("btn1").addEventListener('click' ,function(){
//     count++;
//     console.log("Submitted");
// })

// document.getElementById("btn2").addEventListener('click' ,function(){
//     console.log("Logged In");
// })

// document.getElementById("btn3").addEventListener('click' ,function(){
//     console.log("Logged Out");
// })

function ReachedRestaurant(callback){
    console.log("Reached Restaurant");
    setTimeout(callback,1000);
}

function TableFinding(callback){
    console.log("Found the Table");
    setTimeout(callback,1000);
}

function MenuDiscover(callback){
    console.log("Menu Discovered");
    setTimeout(callback,1000);
}

function PriceCheck(callback){
    console.log("Checked the Price");
    setTimeout(callback,1000);
}

function Starter(callback){
    console.log("Starter Ordered");
    setTimeout(callback,1000);
}

function MainCourse(callback){
    console.log("Main Course Ordered");
    setTimeout(callback,1000);
}

function Desert(callback){
    console.log("Desert Ordered");
    setTimeout(callback,1000);
}

function PayBill(callback){
    console.log("Bill Payed");
    setTimeout(callback,1000);
}

function Leave(callback){
    console.log("Leave the Restaurant");
}

//Chaining the callback

ReachedRestaurant(()=>{
    TableFinding(()=>{
        MenuDiscover(()=>{
            PriceCheck(()=>{
                Starter(()=>{
                    MainCourse(()=>{
                        Desert(()=>{
                            PayBill(()=>{
                                Leave();

                                
                            })
                        })
                    })
                })
            })
        })
    })
})

//Pyramid of doom

//Garbage Collection
//Mark & Sweep Algo
//Inlining
//Copy Elision
//Inline Caching