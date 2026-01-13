// 1)Update an object's age from 25 to 26 immutably using spread operator.
// Add a new hobby to a person's hobbies array immutably.

// let person={
//     firstname:"Lajusam",
//     age:25,
// }

// let updateperson={
//     ...person,
//     age:26,
//     hobbies:"To play chess",
// }
// console.log(person)
// console.log(updateperson)

// 3)Remove the last element from an array immutably.
// 4)Replace the second element in an array immutably.


// let arr1=[23,24,56,54,34,54];

// let updatearray=[
//     ...arr1.slice(0,-1)
// ]

// let updatearray1=[
//     ...arr1.slice(0,1),
//     90,
//     ...arr1.slice(2)
// ]
// // by using map
// let resmap=arr1.map((e,i)=>{
//     if(i===1){
//         return 80;
//     }
//     else{
//         return e;
//     }
// })

// console.log("The last element from this array is remove:",updatearray)
// console.log("The second element is replace to 90:",updatearray1)
// console.log("There is no change in the original array",arr1)
// console.log("Using map to remove the second element",resmap)

// 5)Change a nested property address.city in an object immutably.
// 6)Add a new key-value pair to an object immutably

// let person={
//     name:"Lajusam",
//     address:{
//         city:"Kathmandu",
//         Country:"Nepal"
//     }
// }
// let updateaddress={
//     ...person,
//     address:{
//        ...person.address,
//        city:"Bhaktapur",
//        age:18,
//     //    Adding new key-value pair that is age 


//     }
// }
// console.log(updateaddress);
// console.log(person)

// 7)Remove a property deletedAt from an object immutably
// This will be possible using destructuring

// let obj1={
//     name:"Lajusam",
//     age:23,
//     deletedAt:"This is deleted"
// }

// // destructuring
// const {deletedAt,...obj}=obj1;

// console.log(obj1)
// console.log(obj);

// // 8)Merge two arrays immutably into a new array
// let arr1=[32,45,32,3,43]
// let arr2=[45,32,45,32]
// let arrmerg=[...arr1,...arr2]
// console.log("This is mergeing two arrays immutably:",arrmerg)


// 9)Merge two objects immutably into a new object.
// let obj1={
//     name:"lajusam",
//     age:18,
// }
// let obj2={
//     name:"Bibek",
//     age:20,
// }
// let obj3={
//     person1:{...obj1},
//     person2:{...obj2},
// }
// console.log(obj3)

// 10)Update a specific object in an array of objects immutably (by id).
// Why map() works

// map() goes inside the array and updates each object individually, creating a new object:


let arr=[
   {name:"Lajusam",id:123}
]
let updatearr=arr.map((obj)=>{
        return {
            ...obj,
            id:324,
        }
})

console.log("The updated array:",updatearr)
console.log("The orginal array:",arr)