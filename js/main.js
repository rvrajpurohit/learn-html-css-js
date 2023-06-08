// // remove any number in array
// let arr = [1,3,5,6,7,8]
// let num = parseInt(prompt('enter a number: '))
// let arr1 = []
// for(let i=0; i<arr.length; i++){
//     if(arr[i] !== num){
//         arr1[i] = arr[i];
//     }
// }
// console.log(arr1);



// //factorial
// let num = parseInt(prompt('number: '))
// let sum = 1
// for(let i=1; i<=num; i++){
//     sum *= i
// }
// console.log(sum)

// let num = parseInt(prompt('number: '))
// let temp = 1
// for(let i=num; i>0; i--){
//     temp *= i
// }
// console.log(temp);

// let i = 1
// while(i<=num){
//     sum *= i
//     i++
// }
// console.log(sum)


// //table by recursion function
// let x = parseInt(prompt('number: '));
// function countDown(n,x) {
//     console.log(n*x);
//     const newNumber = n - 1;
//     if (newNumber >0) {
//         countDown(newNumber,x);
//     }
// }
// countDown(10,x);

// let x = parseInt(prompt('number: '));
// function countDown(n,x) {
//     console.log(n*x);
//     const newNumber = n + 1;
//     if (newNumber <= 10) {
//         countDown(newNumber,x);
//     }
// }
// countDown(1,x);

// //power by recursion function
// let n = parseInt(prompt('number: '));
// let x = parseInt(prompt('number power: '));
// function recursion(n,x){
//     if(x == 1){
//         return n;
//     }else{
//         return n * recursion(n, x-1)
//     }
// };
// alert(recursion(n,x));

// let n = parseInt(prompt('number: '));
// let x = parseInt(prompt('number power: '));
// for(let i=0; i<1; i++){
// console.log(n**x)
// }

// //sum 
// function countDown(n){
//     if (n == 1) {
//      return n 
//    }else{
//        return n + countDown(n-1)
//    }
// }
// let n = parseInt(prompt('number: '))
// console.log(countDown(n))

// function countDown(number) {
//     const newNumber = number +1;
//     if (newNumber <= num) {
//         countDown(newNumber);
//         sum = sum + newNumber
//     }
// }
// let num = parseInt(prompt('number: '))
// let sum  = 1;
// countDown(1);
// console.log(sum);

// // input 1,2,3,4,5,6,7,8,9,10
// let num = 10;
// let result =0;
// for(let i=0; i<=num; i++){
//     console.log(result); // 1 3 5 7 9 11 13 15 17 19
//     result = i + (i+1);
// };



// let newNumber = 0;
// function count(num) {
//   let sum = newNumber;
//   if (newNumber < num) {
//     newNumber++;
//     let newSum = sum + newNumber;
//     console.log(newSum);
//     return count(num);
//   } else {
//     return num;
//   }
// }

// console.log(count(10)) // 1 3 5 7 9 11 13 15 17 19

// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();