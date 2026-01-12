//1) Try using undefined function 
// error.message=>the human-readable explanation of what went wrong
// try{
//     hellow();
// }
// catch(error){
//     console.log("The error is:",error.message)
// }


// 2)Divide number by zero

// try{
//     let a=20;
//     let b=0;
//     if(b===0){
//         throw new Error ("Division by 0 is not allowed");
//     }
//     let res=a/b;
//     console.log("The result is:",res);

// }
// catch(error){
//     console.log("The error is:",error.message)
// }

// // 3)Use custom error message
// // 4)Throw error manually.

// try{
//     let lajusam=true;
//     if(!lajusam){
//         console.log("lajusam is false")
//     }
//     else{
//         throw new Error("Lajusam is true and this is a custom error")
//     }
// }
// catch(error){
//     console.log("Error:",error.message)
// }



// 5)Create function with try/catch
// 6)Multiple catch message
// 7)use finally


// function greet(greet1){
//     try{
//         if(typeof greet1 !=="string"){
//             throw new Error("You are giving me a number or you forget to put inside a double quote ")
        
      
//         }
//         else if(greet1.toLowerCase()=="namaste"){
//             console.log("He is nepali")
//         }   
//         else{
//             throw new Error("He is from another planet")
//         }
    
//     }
//     catch(error){
//         console.log("Error:",error.message)
//     }
//     finally{
//         console.log("This code will run no matter what even if it is wrong. ")
//     }
// }
// greet("Namaste");
// greet(123);
// greet("hi")

// 8)Try JSON.parse with invalid JSON
// JSON.parse() is a built-in JavaScript method that takes a JSON (JavaScript Object Notation) formatted string and converts it into a usable JavaScript object or array

// let str = '{"name": "Ram", "age": 25}';
// let obj=JSON.parse(str);

// console.log(obj.name);
// console.log(obj.age);

// 10)use try/catch in async function 
let fetchUsers=async()=>{
    try{
            let response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let result=await response.json();
    console.log("user:",result)
    }
    catch(error){
        console.log("Something went wrong")
    }
    // finally{
    //     console.log("this always called ")
    // }
}
console.log("fetching user.....")
fetchUsers();
console.log("after fetching user")
