// Merge them by using template literals

// let firstName="Bibek";
// let lastName="Magar";

// console.log(`${firstName}${lastName}`);

// 2)Let and const scope

// function scope(){

//     let a=5;
//     const b=6;
//     console.log(a);

// }
// scope();
// // console.log(b);


// 3) Arrow funtion 

// const greet=(name)=>{
  

//     return `Hello ${name}`;
// }

// const myname="Bibek"
// console.log(greet(myname));


// // 4)Arrow function with multipoole parameters
// const multiply=(a,b)=>{
//     return a*b;
// }
// console.log(multiply(2,3));

// 5)object destructuring

    // let person={
    //     name:"Bibek",
    //     age:15,
    //     country:"Nepal",
    // }
    // const {name,country}=person;

    // console.log(name,country);


// 6)Arry destructugin

    // let arr=[10,20,30,40]

    // const[a,b]=arr;

    // console.log(a,b);


// // 7) Default parameters
//   const sayHello=(name="guest")=>{
//             return name;

//   }
//   console.log(sayHello("Bibek"));
//   console.log(sayHello());

// 8) Rest operator(sum og Numbers)

// let sumall=(...value)=>{
//         return value.reduce((accumulator,current)=>{
//             return accumulator+current;
//         },0)
// }   
// let result=sumall(1,2,3,4)
// console.log(result);

// // 9)spread operator with arrays

// let arr1=[1,2,3]
// let arr2=[4,5]

// let arr3=[...arr1,...arr2];

// console.log(arr3)


// 10)Merge and destructue objects;

let obj1={
    a:1,
    b:2,
}
let obj2={
    c:3,
    d:4,
}
const merge={...obj1,...obj2}

let {a,d}=merge;

console.log(a,d);