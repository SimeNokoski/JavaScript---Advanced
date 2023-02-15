import Humans from "./humans.js";

export default class Musician extends Humans{
    constructor(name, age, gender,yearOfExperience){
        super(name, age, gender);
        this.workingTime = `dynamically`;
        this.drinkAlcohol = true;
        this.nervous = false;
        this.smokingCigarettes = true;
        this.yearOfExperience = yearOfExperience;
    }
    musicianInfo(){
        console.log(`${this.name}  has ${this.yearOfExperience} year Of Experience`)

     }
}