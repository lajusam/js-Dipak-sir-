// class:blueprint of an object
// object :instance of the class
class Car{
    #grade;
    constructor(name,color,model,makingyear){
    
        // constructor is callled when object is created
        // it is initial setup of the object
        
        // defining property inside the class
        this.name=name;
        this.color=color;
        this.model=model;
        this.year=makingyear;
        this.#grade="A"
        console.log("car constructor is called")
    }

    // defining method
    #private(){
        console.log(`${this.#grade} started....`)
    }
    start(){
        console.log(`${this.name} started....`)
    }
    displayDetails(myname){
        this.myname=myname;
        console.log("MY name is ",this.myname)
        console.log("car name is ",this.name)
        console.log("car color is ",this.color)
        console.log("car model is ",this.model)
        console.log("car year is ",this.year)
        console.log(this.#grade)
    }
}
// creating instance or oject of class Car.
let tesla=new Car("Tesla","black","model1",2022);
let bmw=new Car("Bmw","white","model2",3022);
// accessing property of class using object

// console.log("Car name is ",tesla.name)
// console.log("Car name is ",tesla.color)
// console.log("Car name is ",tesla.model)
// // console.log("Car name is ",tesla.year)
// tesla.start()
tesla.displayDetails("Bibek")

// accessing bmw object property

// console.log("Car name is ",bmw.name)
// console.log("Car name is ",bmw.color)
// console.log("Car name is ",bmw.model)
// console.log("Car name is ",bmw.year)
// bmw.start();

