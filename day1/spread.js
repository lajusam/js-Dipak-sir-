// spread ooperator
// notation : ...


let arr1=[34,54,53,43]
let arr2=[12,13,12,25]
let temp=[...arr1,...arr2];
let arr3=[24,19,...arr2];
console.log(temp)



// spread operator in object
 let obj1={
    fullname: "hari sharma",
    age:20
 }
 let obj2={
    address:"ktm",
    city:"Lalitpur",
    ...obj1,

 }
 let obj3={
    phone:98038304840,
    contact: 143434,
    
 }
let obj4={...obj1,...obj3}
console.log(obj2);
console.log(obj4)