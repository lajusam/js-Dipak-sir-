// asyncandawait solves the problem of callbachk hell
// makes code look like synchronous code
// async make a function return a promise
// await makes a fucntion wait form a promise


let fetchUsers=async()=>{
    try{
            let response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let result=await response.json();
    console.log("user:",result)
    }
    catch(error){
        console.log("Something went wrong")
    }
    // finally(){
    //     console.log("this always called ")
    // }
}
console.log("fetching user.....")
fetchUsers();
console.log("after fetching user")

