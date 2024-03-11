function square(x) {
    let result= x * x;
    return result;
}

// const square = function (x) {
//     let result= x * x;
//     return result;
// }

// const square = (x) =>  x * x;

// let a = 10;
// let b = square(a);
// console.log("The square of " + a + " is " + b);


// let isGreaterThan = (num1, num2) => {
//     if(num1 > num2){
//         return true;
//     }
//     else {
//         return false;
//     }
// };

let isGreaterThan = (num1, num2) => num1 > num2;


console.log(isGreaterThan(10, 5));

setTimeout(() => {
    console.log("3 seconds have elapsed.");
}, 3000);