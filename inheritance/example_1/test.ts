// наследование - возможность создания класса, на основе существующего

// class Person {
//     name: string;
//     age: number;
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//
//     showInfo(): void {
//         console.log('Имя: ' + this.name);
//         console.log('Возраст: ' + this.age);
//     }
// }
//
// class Student extends Person {
//     university: string;
//
//     constructor(name: string, age: number, university: string) {
//         super(name, age);
//         this.university = university;
//     }
//
//     // переопределение метода
//     showInfo(): void {
//         super.showInfo();
//         console.log('Университет: ' + this.university);
//     }
// }
//
// const student = new Student('Bob', 19, 'MIT');
// student.showInfo();
//
// const student1 = new Student('Jane', 20, 'Yale');
// student1.showInfo();


