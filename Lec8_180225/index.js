// Higher Order Function



// function doubleofData(data){
//         doubledataArr=[];
//         for(let i=0;i<=data.length;i++){
//             doubledataArr.push(data[i]*2);

//         }
//     }
// console.log(doubledataArr(data));


// data = [2,4,6,8,10];

// const calDoubleData = function (data){
//     const output=[];
//     for (let i=0;i<data.length;i++){
//         output.push(data[i]*2);
//     }
//     return output;
// }

// const calHalf = function(data){
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(data[i]/2);
//     }
//     return output;
// }


// const calAddTen = function(data){
//     const output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(data[i]+10);
//     }
//     return output;
// }

// console.log(calDoubleData(data));
// console.log(calHalf(data));
// console.log(calAddTen(data));



// data = [2,4,6,8,10];

// function doubleData(data){
//     var ans = data*2;
//     return ans;
// }

// function halfData(data){
//     var ans = data/2;
//     return ans;
// }

// function addTen(data){
//     var ans = data+10;
//     return ans;
// }


// const calData = function(data, callback){
//     const output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(callback(data[i]));
//     }
//     return output;

// }

// console.log(calData(data,doubleData));
// console.log(calData(data,halfData));
// console.log(calData(data,addTen));

//Benefits of HOF
//Optimization
//Scalability
//Readability



//Polyfill of Map Feature of JS
//By using prototype 
// Array.prototype.mapp = function(logic){
//     var output=[];
//     for (let i=0;i<this.length;i++){
//         output.push(this[i]);
//     }
//     return output;
// }

// console.log(data.mapp(doubleData));


//Task 
// circle = [2,9,16,42,71];
// const pi = 3.14;

// function radiusCalc(circle){
//   radius = circle/2;
//   return radius;
// }
// function circumferenceCalc(circle){
//   circumference = 2*pi*circle;
//   return circumference;
// }
// function areaCalc(circle){
//   area = pi*circle*circle;
//   return area;
// }


// console.log(circle.map(radiusCalc));
// console.log(circle.map(circumferenceCalc));
// console.log(circle.map(areaCalc));



//Task 2
// data = [2, 3, 4, 5, 6, 7, 8]

// function findodd(data){
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(data[i]%2!==0)
//     }
//     return output;
// }


// console.log(findodd(data));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function filterOdd(numbers) {
//   const output = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) { 
//       output.push(numbers[i]); 
//     }
//   }
//   return output;
// }

// console.log(filterOdd(numbers)); 


// Array.prototype.oddMapp = function(logic) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] % 2 !== 0) { 
//       output.push(logic(this[i])); 
//     }
//   }
//   return output;
// };

// console.log(numbers.oddMapp(num => num * 2));




const users=[
    { firstName:"Gaurav", lastName:"Jangra", age:"21"},
    { firstName:"Mohit", lastName:"Saini", age:"22"},
    { firstName:"Ritik", lastName:"Sharma", age:"22"},
    { firstName:"Vipin", lastName:"Yadav", age:"23"},
    { firstName:"Suraj", lastName:"Thakur", age:"25"}
]
//Combine Last Name and First Name

const FullName=users.map((user)=>{user.firstName+" "+user.lastName});

//Filtering age
const filteredFullNames = users
  .filter((user) => user.age <= 23)
  .map((user) => `${user.firstName} ${user.lastName}`);

console.log(filteredFullNames);


