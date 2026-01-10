// Create a function that calculates the sum of numbers in an array using res and spread operators



// let addusingrest=(...v)=>{
//         return v.reduce(
//             (accumulator,currentvalues)=>{
//                 return accumulator+currentvalues
//         },0)
// }
// let arr1=[1,2,3,4,3,4,4]

// console.log(addusingrest(...arr1));







// let obj1={
//     name1:"Hari",
//     age2:20,
//     address:"ratopu;",
//     city:"Ktm",
//     state:"MH"

// }
// let obj2={
//     Grade:8,
//     School:"laj",

// };
// const {name1,Grade}={
//     ...obj1,
//     ...obj2

// };

// console.log(name1);
// console.log(Grade);


// with function

// const mergefunction=(obj1,obj2)=>{
//         const merge={...obj1,...obj2};

//         const {name1,address}=merge;

//         return {name1,address};
// }

// const obj1={
//     name1:"Bibek",
//     grade:9,
// }
// const obj2={
//     address:"Kathmandu"


// }

// const {name1,address}=mergefunction(obj1,obj2);

// console.log(name1,address);



// Write a function multiplyusingrest 

// let funmul=(...values)=>{
//      return values.reduce((accumulator,currentvalue)=>{
//             return accumulator*currentvalue;
//     })
// }

// let arr=[1,2,3,4,5,3,3]
// console.log(funmul(...arr))


// write a function to sum odd numbers 


let odd=(...v)=>{
    return v.reduce((a,c)=>{
        if(c%2 !== 0){
            console.log(c);
            return a*c;
        }
        else
            return a;
    },1)
}
let arr=[1,2,3,4,5,6,7]
console.log(odd(...arr))