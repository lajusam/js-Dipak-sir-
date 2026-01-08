// rest operator cobmines multiple values in an array
// notation :...
// eg without using rest operator

// let add =(a,b,c,d,e,f,g,h,i,j,k,l,m,n)=>{

//     return a+b+c+d+e+f+g+h+i+j+k+l+m+n;
// }
// let result=add(1,2,3,4,5,6,7,8,9,0,11,22,33,44)
// console.log(result)


// using Rest operator

let addusingrest=(...v)=>{
        return v.reduce(
            (accumulator,currentvalues)=>{
                return accumulator+currentvalues
        },0)
}

// calling function
let result2=addusingrest(1,2,3,2,44,2,2,2,3,3,2,2,2,3,2,2,3,2,3)
console.log(result2)