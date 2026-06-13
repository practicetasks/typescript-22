// class User {
//     login: string;
//     email: string;
//     views: number;
//
//     constructor(login: string, email: string) {
//         this.login = login;
//         this.email = email;
//         this.views = 0;
//     }
//
//     increaseView() {
//         this.views++;
//     }
// }
//
// const user = new User('bob', 'bob123@mail.com');
// console.log(user.email);
// console.log(user.login);


class BankAccount {
    private owner: string;
    private balance: number;

    constructor(owner: string) {
        this.owner = owner;
        this.balance = 0;
    }

    deposit(amount: number) {
        this.balance += amount;
    }
    getBalance(): number {
        return this.balance;
    }

    getOwner(): string {
        return this.owner;
    }

    setOwner(owner: string): void {
        if (owner !== '') {
            this.owner = owner;
        }
    }

    transfer(otherAccount: BankAccount, amount: number) {
        this.balance -= amount;
        otherAccount.balance += amount;
    }
}
//  модификаторы доступа
//  public - доступ везде
//  private - доступ только внутри этого класса
//  protected - доступ внутри класса и наследников

// геттеры и сеттеры
const account = new BankAccount('Иван');
account.deposit(270);
account.deposit(100);
console.log(account.getBalance());
console.log(account.getOwner());
account.setOwner('');

console.log(account.getOwner());


// class Product {
//     name: string;
//     price: number;
//
//     constructor(name: string, price: number) {
//         this.name = name;
//         this.price = price;
//     }
//
//     // Если первый товар дороже другого:
//         // <название_первого_товара> дороже чем <название_другого_товара> на ...
//     // Если первый товар дешевле другого:
//         // <название_первого_товара> дешелве чем <название_другого_товара> на ...
//     // Иначе
//         // <название_первого_товара> и <название_другого_товара> имеют одинаковую стоимость
// }
//
// // const iphone17 = new Product('Iphone 17', 619990);
// // const samsungGalaxyS26 = new Product('Samsung Galaxy S26', 589990);
// // const airpodsPro = new Product('AirPods Pro', 129990);
// //
// // iphone17.compareTo(samsungGalaxyS26); //  Iphone 17 дороже чем Samsung Galaxy S26 на 30000
// // samsungGalaxyS26.compareTo(iphone17); //  Samsung Galaxy S26 дешевле чем Iphone 17 на 30000
// //
// // airpodsPro.compareTo(samsungGalaxyS26); // AirPods Pro дешевле чем Samsung Galaxy S26 ...
// // airpodsPro.compareTo(iphone17);         // AirPods Pro дешевле чем Iphone 17 ...
// //
// // airpodsPro.compareTo(airpodsPro);       //  AirPods Pro и AirPods Pro имеют одинаковую стоимость
//
//
//
