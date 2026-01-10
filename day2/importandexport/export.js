// export example
// using normal export to singel variable 
export const PI=3.1415

// default export :should be only once in a file 

let radius=34.5;
export default radius;


// exporting multiple variables at once 

let x=10;
let y=30;
export{x,y}

// exporting fucntion 
const Calarea=(radius)=>{
    return PI *radius*radius
}
let calpermeter=(diameter)=>{
    return  PI * diameter
}
export {Calarea,calpermeter}