// // 1)Create class vehicle
// class Vehicle{

//     // 2)Add constructor
//     constructor(name,color,model,year){
//         this.name=name;
//         this.color=color;
//         this.model=model;
//         this.year=year;
    
//     }
//     // 3)Add method drive()
//     drive(){
//         console.log(`${this.name} is being driven by Lajusam`)
//     }
// }
// // 4)Extend class Bike.
// class Bike extends Vehicle{
//         constructor(name,color,model,year){
//             super(name,color,model,year)
//         }
//  //  5)override drive()
//            drive(){
//             console.log(`${this.name} is being driven by him`)
//            }

//         }

// let mybike=new Bike("ktm","black","123",2016);
// console.log(mybike);
// mybike.drive("Ktm");
// let myvechile= new Vehicle("Tesla","red",232,34)
// myvechile.drive("tesla")


// 6)Create class student.

class Student{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }
    details(){
        console.log("Name:",this.name)
        console.log("Marks:",this.marks);
    }
}

class Programmer extends Student{
    constructor(name,marks,language){
        super(name,marks,language)
        this.language=language;
      
    }
    details(){
        super.details();
        console.log(`The language he use is:${this.language}`)
    }
}
class Designer extends Student{
    constructor(name,marks,tools){
        super(name,marks,tools)
        this.tools=tools;
      
    }
    details(){
        super.details();
        console.log(`The tools he use is:${this.tools}`)
    }
}
const letstudent=new Student("Ram",78);
const letProgrammer=new Programmer("Lajusam",98,"Javascript");
const letDesigner=new Designer("Kushal",99,"Photoshop")

letstudent.details();
letProgrammer.details();
letDesigner.details();

