// // 1)create a promise that resolves.
// 2)create promise that rejects.
// 3)use.then()
// 4)use.catch()

// let mypromise= new Promise((resolve,reject)=>{
//     let ifLajusam=true;
//     if(ifLajusam){
//         resolve("He is lajusam")
//     }else{
//         reject("He is not lajusam")
//     }
// })
// .then((result)=>{
//     console.log(result)
// })
// .catch((e)=>{
//     console.log("error",e)
// })


// 5)convert to async/await
// let myPromise=async()=>{
//     let ifLajusam=true;
//     try{
//         if(!ifLajusam){
//             return "He is lajusam"
//         }
//         else{
//             throw "He is not lajusam"
//         }
//     }
//     catch(e){
//         console.log("error",e)
//     }
// }
// myPromise();


// 9)Use await inside async fucntion 
// 10)Use multiple awaits
//let fetchUsers=async()=>{
//     try{
//             let response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let result=await response.json();
//     console.log("user:",result)
//     }
//     catch(error){
//         console.log("Something went wrong")
//     }
//     // finally(){
//     //     console.log("this always called ")
//     // }
// }

// 7)Create functionthat returns Promise.
// 6)Wait 2 seconds using settimeoutpromise
function  Wait2sec(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let message=false;
            if(message){
            resolve("Message is true");
            }
            else{
                reject("Message is fale")
            }
        },2000)
    })
}

// Wait2sec().then((result)=>{
//     console.log(result)
// })
// Wait2sec().catch((error)=>{
//     console.log("error:",error)
// })

// using awiat inside async fucntion 

let run=async()=>{
    try{
        const result=await Wait2sec();
        console.log(result);
    }
    catch(e){
        console.log("Error",e)
    }
}
run();