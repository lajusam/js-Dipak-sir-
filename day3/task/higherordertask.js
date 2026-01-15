// 1)Write a higher-order function repeat(action, times) that calls action function times times.

// function repeat(action,times){
//     for(let i=0;i<times;i++){
//         action();
//     }
// }

// repeat(()=>console.log("Done"),2)

// // here action =()=>console.log("Done")
// // times=2;

// 2)Create a function operate(arr,fn) that applies fn to each element using map .

// function operate(arr,fn){
//      return arr.map(fn);
// }

// let arr=[1,2,3,4,5]

// const result=operate(arr,n=>n*2)
// console.log(result)
// // map takes 1 → calls fn(1) → 1 * 2 = 2 → new array elemen

// 3)Write a function filterBy(arr, conditionFn) that returns filtered array using the provided condition.

// function filterBy(arr, condtitionFN){
//     return arr.filter(condtitionFN);
// }
// let arr=[23,24,32,56,75,43]
// const result=filterBy(arr,n=> n <32 );
// console.log("The number less than 32 are:",result)

// 4)Create a higher-order function logger(fn) that logs "before" and "after" calling fn. 

// function logger(fn){
//     return function(){
//         console.log("Before");
//         fn();
//         console.log("after");
//     }

// }

// const wrapped=(logger(()=>
//     console.log("fn is called")
// ));
// wrapped();
// // here why wrapped because logger(fn) is a higher-order function that returns a new function which logs ‘Before’, calls fn, then logs ‘After’ — you must call the returned function to run fn.”


// 5)Write a function createAdder(x) that returns a new function adding x to its argument.

function createAdder(x){
    return function(y){
        return x+y;
    }
}

const result=createAdder(4);
console.log(result(5))