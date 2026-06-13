class Cat {
    protected type: string;
    protected speed: number;

    constructor(type: string, speed: number) {
        this.type = type;
        this.speed = speed;
    }

    run() {
        console.log(`${this.type} бежит со скоростью ${this.speed} км/ч`);
    }

    getType(): string {
        return this.type;
    }
}

class Lion extends Cat {
    weight: number;

    constructor(weight: number) {
        super('Лев', 60);
        this.weight = weight;
    }
}

class Tiger extends Cat {
    constructor() {
        super('Тигр', 70);
    }
}

class Cheetah extends Cat {
    constructor() {
        super('Гепард', 100);
    }
}

class Panther extends Cat {
    constructor() {
        super('Пантера', 80);
    }
}

class Doctor {
    heal(cat: Cat) {
        console.log(`${cat.getType()} здоров`);
    }
}

const lion: Lion = new Lion(80);
console.log(lion.weight)


const tiger = new Tiger();
const cheetah = new Cheetah();
const panther = new Panther();
const doctor = new Doctor();

doctor.heal(lion);
doctor.heal(tiger);
doctor.heal(cheetah);
doctor.heal(panther);


// SOLID
// Open closed principle - класс должен быть открытым к расширению, но закрыта к изменениям
