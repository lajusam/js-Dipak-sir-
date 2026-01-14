//1) write a pure function multiply(a,b) that returns the product of two numbers.

// let multiply=(a,b)=>{
//     return a*b;
// }
// console.log(multiply(2,3));

// 2Create a pure function getFullName(firstName, lastName) that returns a concatenated full name with a space.

// let getFullname=(firstname,lastname)=>{
//         return console.log(`${firstname} ${lastname}`)
// }

// getFullname("Bibek","Magar");

// 3Write a pure function isEven(num) that returns true if the number is even, false otherwise.

// let isEven=(num)=>{
//     if(num%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(3));

// 4)Create a pure function capitalize(str) that returns the string with the first letter capitalized.

// let capitalize=(str)=>{
//     if(str.lenght===0) return ""
//     return str[0].toUpperCase()+str.slice(1);
// }
// console.log(capitalize("bibek"));

// Write a pure function calculateArea(radius) that return the area of a cricle(use π ≈ 3.14).

// let calculateArea=(radius)=>{
    
//     return (3.14)*(radius**2)
// }
// console.log("The area of circle is where r is 3:",calculateArea(3))

// 6)Create a pure function getInitials(firstName, lastName) that returns initials like "D.S." for "Dipak Shrestha".

// let getInitials=(firstName,lastName)=>{
//         return(
//         console.log(`"${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}"`)
//         )
// }
// getInitials("Bibek","Magar")


// 7)Write a pure function fahrenheitToCelsius(f) that converts Fahrenheit to Celsius.

// let fahrenheitToCelsius=(f)=>{
//             return 5/9*(f-32);
// }
// console.log(fahrenheitToCelsius(120));

// 8)Create a pure function reverseString(str) that returns the reversed string.

// let reverseString=(str)=>{
//     let result="";
//     for(let i=str.length-1;i>=0;i--){
//         result += str[i]
//     }
//     return result;
// }
// console.log(reverseString("Lajusam"))


// 9)Write a pure function findMax(arr) that returns the largest number in an array.

// let findMax=(arr)=>{
//     let max=arr[0];
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i]>max)
//             max=arr[i]
//     }
//     return max;
// }

// console.log(findMax([32,33,44,55,66,77]))
