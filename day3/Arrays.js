// Array:collection of elements
// notation:[]
// creating array:
let myarr=[1,2,3,4,5,6];
// accessing element in some index.
console.log("MY array:",myarr[4])
console.log("MY array:",myarr[2])
// adding new element at last
myarr.push(23)
console.log("new array:",myarr)
// removing the last element
myarr.pop()
console.log("MY array after pop:",myarr)

// chaning element in some index
myarr[3]=89
console.log("MY new array in index 3:",myarr)


// normal loop in array

for(let i=0;i<=myarr.length;i++){
    console.log("Array",myarr[i])
}

// using for of 
for(element of myarr){
    console.log("element:",element)
}
// for using for-in
for(index in myarr){
    console.log("indes:",index,"element:",myarr[index]);
}

// using extension function  foreach

myarr.forEach((element,index)=>{
    console.log("Element:",element,"index is :",index)
})

let names=["Anita","bibek","Rohit"]



let modname=names.map((element)=>{
    return "element",element.toUpperCase()

})
console.log(modname)

// using reduce to accumulate the element in array
let num1=[23,43,4,32,33,23,32,92]
let sum= num1.reduce((accumulator,elements)=>{
          
            return ((accumulator>elements)?accumulator:elements);
       
            
},0)
// intital for accumulator is 0

console.log(sum)

// using find in array:always return first found element

let marks=[54,65,76,87]

let found=marks.find((e,i)=>{
    return e<65;
}) 

console.log(found)

// // delete 
// // todo : slice and splice
// delete marks[1];
// console.log(marks)


// using filter in array

let filer1=marks.filter((element,index)=>{
        return element<76
})
console.log(filer1)

// todo:sort,reverse,concat,join

