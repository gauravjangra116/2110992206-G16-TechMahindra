//Sum of Array

// const arr=[5,7,3,1,8]

// var sumofArr=0;
// for(let i=0;i<arr.length;i++){
//     sumofArr+=arr[i];
// }
// console.log(sumofArr);

// const ans=arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc

// },0);
// console.log(ans);



// const users=[
//     { firstName:"Gaurav", lastName:"Jangra", age:"21"},
//     { firstName:"Mohit", lastName:"Saini", age:"22"},
//     { firstName:"Ritik", lastName:"Sharma", age:"22"},
//     { firstName:"Vipin", lastName:"Yadav", age:"23"},
//     { firstName:"Suraj", lastName:"Thakur", age:"25"}
// ]

// const ans= users.reduce(function(acc,curr){
//     if(!acc[curr.age]){
//         acc[curr.age]=1;
//     }
//     else{
//         acc[curr.age]++;
//     }
//     return acc;

// },{})

// console.log(ans);





// var maxNumber=0;

// for(let i=0;i<dataMap.length;i++){
//     if(maxNumber<dataMap[i]){
//         maxNumber=dataMa[i];
//     }
// }
// console.log(maxNumber);


// dataMap=[2,5,7,8,3,7,9];

// var ansMAx=dataMap.reduce(function (acc,curr){
//     if(curr>acc){
//         acc=curr;
//     }
//     return acc;
// },0);
// console.log(ansMAx);




//PROMISE

// reachedRestaurant(function (){
//     console.log("Reached the Restaurant")
// })
// .then(TableFinding)
// .then(MenuDiscover)
// .then(PriceCheck)
// .then(starterOrder)
// .then(mainCourse)
// .then(desert)

// const myRestaurantPromise = new Promise(resolve, reject){
//     if(1:30>time>2:30){
//         resolve("Yes Successfully Reached")
//     }
//     else{
//         reject("Can't Reach at Time")
//     }
// }


// const githubData = fetch("https://api.github.com/user/gauravjangra116/");
// setTimeout(()=>{
//     console.log(githubData);

// },1000)



// const cart = ["shoe", "shirt","pant","watch","phone"];

// createOrder(cart,callback){
//     orderPayment(orderId,callback){
//         orderSummary(orderId,callback){
//             updateWallet(){
//                 console.log("Wallet Updated")
//             }
//         }
//     }
// }

// "shoe", "shirt","pant","watch","phone"

const cart = [];

function createOrder(cart){
    const myPromise = new Promise(function(resolve,reject){
        if(cart.length>0){
            console.log("Order Placed Successfully")


            resolve("12345")
        }
        else{
            const err= new Error("Order Failed")
            reject("Order Rejected");
        }
    });
    return myPromise;
}

function orderPayment(orderId){
    console.log("Order Placed Successfully", orderId)
}

function orderSummary(orderId){
    console.log("Order Summary", orderId)
}

function updateWallet(){
    console.log("Wallet Updated")
}

console.log(createOrder(cart));

createOrder(cart)

.catch( function(err){
    console.log("Error Occured")
    console.log(err.message);
})

.then(function (orderId){
    return orderPayment(orderId)
})
.then(function (orderId){
    return orderSummary(orderId)
})
.then(function(){
    return updateWallet()
})






// .then(function orderPayment(orderId){
//     console.log("Order Payment Successful",orderId)
// })

// .then(function orderSummary(orderId){
//     console.log("Order Summary", orderId)
// })




//PROMISE API's
//Promise.allsettled()
// Promise.all()
// Promise.any()
// Promise.race()