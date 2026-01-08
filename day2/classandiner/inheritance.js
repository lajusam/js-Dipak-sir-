// inheritance : the ability of an object to inherit properties and methods form  another object
// parent class
class Vehicle{
    constructor(name,model,year){
        this.name=name;
        this.model=model;
        this.year=year;
        console.log("Vehicle constructor called")
    }
    makeSound(sound){
        console.log(`${this.name} makes ${sound}`)
    }
    displayNoofwheels(){
        console.log(`${this.name} had 4 wheels`)
    }
}
// child car
class Car extends Vehicle{

    constructor(name,model,year,color){
        // calling parent class constructor
        super(name,model,year);
         // new property for Car class
        this.color=color;
        console.log("car constructor called")
    }
}
class Bike extends Vehicle{

    constructor(name,model,year,color){
        // calling parent class constructor
        super(name,model,year);
         // new property for Car class
        this.color=color;
        console.log("car constructor called")
    }
    // method overriding:Defining same method in child class
      displayNoofwheels(){
        console.log(`${this.name} had 2 wheels`)
    }
}
let mycar=new Car("Tesla","model-1",2323,"red")
console.log(mycar.name)
console.log(mycar.model)
console.log(mycar.year)

mycar.makeSound("sheesh");


let mybike=new Bike("KTM","KTM_250",2332,"Orange")
console.log(mybike.name)
console.log(mybike.model)
console.log(mybike.color)

mybike.makeSound("vroom vroom");
mybike.displayNoofwheels();



