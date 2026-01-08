// promise: represnt to the future valueit makes asynchronous programming easy
// 
// resolve: promise will be fullfilled
// reject: promisw eill be rejected

// creating promise

let myPromise= new Promise(
    // callback function 
    (resolve,reject)=>{
        let mailePromisepuraGaray= true;
        if(!mailePromisepuraGaray){
            resolve("Maile baacha kasam paura garay")
        }else{
            reject("I'm sorry,maile ksama pura garna sakina")
        }
})
console.log("before promise")
// consuming promise

myPromise.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log("error:",error)
})
.finally(()=>{
    console.log("always finally called")
})
console.log("after promoise")