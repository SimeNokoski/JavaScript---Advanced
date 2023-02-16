class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }
    eat(animalInput) {
        // console.log(animalInput.name)
        //   if (animalInput.name !== undefined){
        if (animalInput instanceof Animal) {

            if (this.type === 'herbivore') {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
            }
            else if (animalInput.size <= this.size) {
                animalInput.isEaten = true;
                console.log(`The animal ${this.name} ate the ${animalInput.name}`);
            }
            else {
                console.log(`The animal ${this.name} tried to eat the ${animalInput.name} but it was too large`);
            }
        }


        else {
            console.log(`The animal ${this.name} is eating ${animalInput}`);
        }
    }
}

const cat = new Animal("Cat1", `carnivore`, 3, 50);
const rabbit = new Animal("Rabbit1", "herbivore", 2, 20);
const dog = new Animal("Dog1", `carnivore`, 6, 100);
const beat = new Animal("Beat1", `omnivore`, 7, 600);
const fox = new Animal(`Fox1`, `carnivore`, 1, 123);
 
beat.eat(cat);
beat.eat(`portokal`);
dog.eat(beat);
dog.eat(cat);
rabbit.eat(dog);
cat.eat(rabbit);
fox.eat(beat);
fox.eat(dog);
console.log(rabbit)
console.log(beat)




