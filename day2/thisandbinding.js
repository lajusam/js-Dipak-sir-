//  thsi always refers to the nearest object or instance 

let obj1={
    price:400,
    fruitname:"apple",
    weight: 2,
    unit: "kg",
    totalcost: function(){
        let totalprice=this.price*this.weight;
        console.log("inside total cost function :",totalprice)
    },
    displayfruitname: ()=>{
        // this keyword will nevver exist in the arrow function.
        console.loge("Fruit name is :",this.fruitname)
    }   

}
obj1.totalcost();

// assigning total cost function toa  bariable
// here when we call  the function through varriable, this will be lost 
let mynewfucntion=obj1.totalcost;
mynewfucntion();

// so using bind to perserve this keyword
let mynewfucntionbind=obj1.totalcost.bind(obj1)
mynewfucntionbind();

// calling arrow function
// obj1.displayfruitname();