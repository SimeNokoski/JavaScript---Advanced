import Mammal from "../mammal.js"

export default class Humans extends Mammal {
    constructor(name, age, gender) {
        super(name, age, gender);

        this.speaks = true;
        this.aware = true;
        this.hands = 2;
        this.emotions = true;
        this.teeth = 32;
    }
    humanInfo(){
        console.log(`${this.name} is ${this.age} years old. ${this.name} has ${this.teeth} teeth, ${this.hands} hands`)
    }
    old(){
        if(this.age > 90){
            console.log(`Se blizit krajot`);
        }
        else {
            console.log(`Dobar si`);
        }
    }
    
}