//Object Liternal Syntax
const user = {
    name : 'Test',
    age : '10',
    class : 'KG'

};
console.log(user.name,user.age,user.class);

//Constructor Function
function Car (brand,modal,speed,year){
    this.brand= brand;
    this.modal = modal;
    this.speed= speed;
    this.year = year;
}
const values = new Car("BMW","X5","200kmph","2020");
console.log(values.brand,values.modal,values.speed,values.year)


//Class Syntax
class Person{
    constructor(name, person){
        this.name = name;
        this.person = person;
    }
    addToCart(){
        console.log(`${this.name} is added to cart`);
    }

}

const per = new Person("John", "Doe");
console.log(per.name,per.person);
per.addToCart();

//Object.create() method
