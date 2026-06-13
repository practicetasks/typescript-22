abstract class Animal {
    sound(): void {
        console.log('Звук животного')
    }
}

class Cat extends Animal {
    override sound(): void {
        console.log('Meow...');
    }
}

class Dog extends Animal {
    override sound(): void {
        console.log('гав гав...');
    }
}

const animal: Animal[] = [
    new Cat(),
    new Dog()
]

animal.forEach(animal => animal.sound());


// SOLID
// S - single responsibility
// O - open closed

