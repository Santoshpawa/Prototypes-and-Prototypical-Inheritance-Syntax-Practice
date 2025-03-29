class Animal{
    constructor(type){
        this.type = type;
    }
    sound = (s)=>{
        console.log(`${this.type} ${s}`)
    }
}

class Dog extends Animal{
    constructor(){
    super()
    }
    sound = ()=>{
        console.log("Bark")
    }

}
let mydog= new Dog()
mydog.sound();
