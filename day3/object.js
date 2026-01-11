// objects:key:value pair or json data
// notation:{}

// declearing object
let myobj={
    "fullname":"Lajusam",
    age:20,
    address:"Ktm",
}

// accessing value from key
// 1.using bracket notation
let fn=myobj["fullname"]
console.log(fn)
// 2.dotnotation
let myaddress=myobj.address
console.log(myaddress);

// adding new keyvalue pair

myobj.country="Nepal"
console.log(myobj)

// updating or changing value of key 
myobj.age=56
console.log(myobj)

// deleting key:value pair
delete myobj.address
console.log(myobj)

// converting object (key:valuepair) to objec(array)
// converting to keys array

let keysarray=Object.keys(myobj)
console.log("keys array:",keysarray)

let value= Object.values(myobj)
console.log("value:",value)

// converting to entries [key,value] array
// [[k1,v1],[k2,v2],[k3,v3]]
let entries=Object.entries(myobj)
console.log("entries",entries)
// todo:use forEach for all of the above  and use destructuring for entries for each


// entires inside forEach

entries.forEach(([keys,value],index)=>{
    console.log("Index:",index,"key:",keys,"Value:",value)
})