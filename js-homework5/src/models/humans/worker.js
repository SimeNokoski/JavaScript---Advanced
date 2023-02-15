import Humans from "./humans.js";

export default class Worker extends Humans{
    constructor(name, age, gender,industry,yearOfExperience){
        super(name, age, gender);
        this.employee = true;
        this.workingTime = `8h`;
        this.nervous = true;
        this.industry = industry;
        this.yearOfExperience = yearOfExperience;
    }
     workerInfo(){
        console.log(`${this.name} works ${this.industry} and has ${this.yearOfExperience} year Of Experience`)

     }
   
}