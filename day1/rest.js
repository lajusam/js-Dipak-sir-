// // rest operator cobmines multiple values in an array
// // notation :...
// // eg without using rest operator

// // let add =(a,b,c,d,e,f,g,h,i,j,k,l,m,n)=>{

// //     return a+b+c+d+e+f+g+h+i+j+k+l+m+n;
// // }
// // let result=add(1,2,3,4,5,6,7,8,9,0,11,22,33,44)
// // console.log(result)


// // using Rest operator

// let addusingrest=(...v)=>{
//         return v.reduce(
//             (accumulator,currentvalues)=>{
//                 return accumulator+currentvalues
//         },0)
// }

// // calling function
// let result2=addusingrest(1,2,3,2,44,2,2,2,3,3,2,2,2,3,2,2,3,2,3)
// console.log(result2)




// slice
// start → index to begin (inclusive)

// end → index to stop (exclusive)

// If end is not given, it goes till the end

// Negative values count from the end
const arr=[10,20,30,40,50]
const part=arr.slice(1,4);
const part1=arr.slice(2);
// IF the array is big and you want to remove from the last then -1 because it take every element form firt to second last element and start from 0
const part2=arr.slice(0,-1);

console.log(part);
console.log(arr);
console.log(part1)
console.log(part2)