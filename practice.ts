// Single Responsibility principle

class Calculator{
   add(a: number, b: number){
        return a + b;
   }

   subtruct(a: number, b: number){
        return a - b;
   }

   multiply(a: number, b: number){
        return a * b;
   }

   divide(a: number, b: number){
        return a / b;
   }

   addAndMultiply(a: number, b: number, c: number){
       this.multiply(this.add(a,b),c)
   }
}

// Purpose of the class or How many methods a class or interdepency amongst the methods

let cal1 = new Calculator();

console.log(cal1.add(3,5));


//////////////////////////////////////////////////////////////////////////////////////////

// Open closed Principle (closed for modification but open for extention)

/*
1. Open for extension
2. closed for Modification
*/

class Student{
    uniformColor: String = "White";

    getUniformColor(){
        return this.uniformColor;
    }
}

class S1andS3SStudent extends Student{
    uniformColor: String = "red"
}

class S2andS4Student extends Student{
    uniformColor: string ="blue"
}


//////////////////////////////////////////////////////////////////////////////////////////


// Liskov Substitution principle. 

// Super <- child ==> Objects of Child must be replaceable with the objects of Super
// if child extends from super, then objects...

class Parent {
    canDoA(){
        console.log("I am parent and I can do A...")
    }
    canDoB(){
        console.log("I am a parent and I can do B...")
    }
    canDoC(){
        console.log("I am parent I can do C...")
    }
    canDoD(){
        console.log("I am parent I can do D...")
    }
}

class Child extends Parent{
    canDoA(){
        console.log("I am child and I can do A...")
    }
    canDoB(){
        console.log("I am a child and I can do B...")
    }
    canDoC(){
        console.log("I am child I can do C...")
    }
    // This violates LSP because the Child fails to do something the parent can do. 
    // canDoD(){
    //     console.log("I am child I can't do D...")
    // }
}


//////////////////////////////////////////////////////////////////////////////////////////

//ISP “Clients should not be forced to depend upon interfaces that they do not use.”

abstract class Person{
    a: any = null;

    abstract breath(); // Can only define this abstract mtd here then
                       // Anything made abstract is not defined right there. 
}

// Rejected because we cannot have instances of abstract classes
// let P1 = new Person()

// This class has to implement the method
class Male extends Person{
    breath(){
        console.log("I am a Male and I am breathing...")
    }
}

class Female extends Person{
    breath(){
        console.log("I am a Female and I am breathing...")
    }
}

// Interface 
interface LivingThings{
   produce();
   eat();
   move();
   die(); 
//    comouflage(); 
}

interface ThingsThatCamouflage{
    comouflage();
}
// Or interface ThingsThatCamouflage extends LivingThings 

// Person now has to implement all the interface properties 
class Human implements LivingThings{
    produce(){
        console.log("")
    };
    eat(){
        console.log("")
    };
    move(){
        console.log("")
    };
    die(){
        console.log("")
    }; 
    // comouflage(){
    //     console.log("") // Person being forced to implement what it doesnt need
    // }
}

class Chameleone implements LivingThings, ThingsThatCamouflage{
    // Chameleone implements all

}
// Instead of one big interface, create smaller interfaces that can be used properly.



//////////////////////////////////////////////////////////////////////////////////////////

// Dependecy Inversion Principle
//Dependencies

/*
1. Lamp  (low level)
2. Button (High level)
*/

class Lamp{
    state: Boolean = false;
}
class Button{
    lamp: Lamp;
    constructor(lamp: Lamp){
        this.lamp = lamp
    }
    switch(){
        this.lamp.state = !this.lamp.state;
        console.log(this.lamp.state);
    }
}
let lamp1 = new Lamp();
let button1 = new Button(lamp1);
button1.switch();
button1.switch();
button1.switch();
button1.switch();
button1.switch();
button1.switch();
button1.switch();
button1.switch();
