// 1)Use map  to double all numbers in [1,2,3,4,5]
// 2)Use filter to get all even number.
// let num1= [1,2,3,4,5,6]

// num1.map((e)=>{
//     console.log("Double",e*e)
// })

// let resfilter1=num1.filter((num)=>{
//     if(num%2==0){
//         return num;
//     }
//     else return false;
// })
// console.log("Even:",resfilter1)

// 3)Use reduce to calculate the sum of[10,20,30,40]

// let sum=[10,20,30,40]

// let res2=sum.reduce((a,c)=>{
//     return a+c;
// })
// console.log(res2)

// // 4)use  find to get the first object with age>18 for an array of user objects
// // find onlly first element that matches the conditon return and stop

// let arr1=[
//     {name:"lajusam",age:19},
//     {name:"Nilam",age:18},
//     {name:"Dikshant",age:21},
//     {name:"Rajan",age:25},
//     {name:"swastick",age:17},
// ]

// let resfind=arr1.find((e)=>{
//     if(e.age>18){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(resfind)

// 5)Use forEach to log each element of ["apple", "banana", "orange"] with its index.

// let fruits= ["apple", "banana", "orange"] ;

// fruits.forEach((e,i)=>{
//     console.log("Index:",i,"Fruits:",e)
// })


// 6)Use map to extract only names from an array of user objects.
//  let user=[
//     {name:"lajusam",age:19},
//     {name:"Nilam",age:18},
//     {name:"Dikshant",age:21},
//     {name:"Rajan",age:25},
//     {name:"swastick",age:17},
// ]

// let resmap=user.map((e)=>{
//     console.log("Name only:",e.name)
// })

// 7)Use filter to get products with price < 100 from an array of product objects.

// let product=[
//     {name:"Noodles",price:150},
//     {name:"Biscuits",price:50},
//     {name:"Cocla",price:60},
//     {name:"Bread",price:180},

// ]

// product.filter((e)=>{
//     if(e.price<100){
//         console.log("These product cost less than hundred:",e)
//     }
// })

// 8)Use reduce to find the maximum value in an array of numbers

// let num=[23,45,65,43,23];

// let res1=num.reduce((a,c)=>{
//     if(a>c){
//         return a;
//     }
//     else{
//         return c;
//     }
// })
// console.log("This is the maximum value in this array of numbers",res1);

// 9)Use map and filter together to get names of adults (age >= 18) in uppercase.

// let user=[
//     {name:"lajusam",age:19},
//     {name:"Nilam",age:18},
//     {name:"Dikshant",age:21},
//     {name:"Rajan",age:15},
//     {name:"swastick",age:17},
// ]

// let adult=user.filter((e)=>{
//     if(e.age>=18){
//         return e.age;
//     }
// })

// adult.map((e)=>{
//     console.log("The adults name in uppercase",e.name.toUpperCase())
// })

// console.log(adult)

// 10)Use foreach to buld a html unorder list string from an array of item 