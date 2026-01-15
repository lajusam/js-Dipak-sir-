
let findMax=(arr)=>{
    let max=arr[0];
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>max)
            max=arr[i]
    }
    return max;
}

console.log(findMax([32,33,44,55,66,77]))
