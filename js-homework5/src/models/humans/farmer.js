import Humans from "./humans.js";

export default class Farmer extends Humans{
    constructor(name, age, gender){
        super(name, age, gender);
        this.workingTime = `dynamically`;
        this.physicalWork = true;
        this.driveTractor= true;
    }
    die(causeOfDeath = 'nestrekja pri rabota') {
        super.die(causeOfDeath);
    }
    tractorSound(){
        console.log(`Rgrg rgrgrg`)
    }
}