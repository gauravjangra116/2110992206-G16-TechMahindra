// function two(){
//     return 2;
// }

// function four(){
//     return 4;
// }
// console.log(1);
// console.log(two());
// setInterval(()=>{
//     console.log(3)
// },3000)
// console.log(four());
// setInterval(()=>{
//     console.log(3)
// },5000)
// console.log(6)

// for(let i=1;i<=6;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000);
// }

// for(var i=1;i<=6;i++){
//     function x(i){
//         setTimeout(() => {
//             console.log(i)
//             }, 1000);

//     }
//     x(i)
// }

// function x(){
//     var a=7;

//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }
// var z=x();
// console.log(z);
// z();

// function z(){
//     var b=900;

//     function x(){
//         var a=7;

//         function y(){
//             console.log(a,b);
//         }

//     }
// }

function counter(){
    var count=0;
    
    return function increment(){
        count++;
        console.log(count);
    }
}

var counter1=counter();
counter1();
counter1();
counter1();
counter1();
counter1();


function Counter(){
    var count=0;
    
    this.increment = function(){
        this.count++;
        console.log(count);
    }
    this.decrement = function(){
        this.count--;
        console.log(count);
    }
}

var counter1=new Counter()
counter1.increment();
counter1.increment();
counter1.decrement();