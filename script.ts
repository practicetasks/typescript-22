// const arr: string[] = ['A', 'B', 'C', 'D'];
// const nums: number[] = [1,2,3,4,5];
//
// arr.forEach(str => {
//     console.log(str.toUpperCase())
// })

// function multiply(a: number): number {
//     return a * 2;
// }
//
// const x = multiply(5);
// console.log(x)


const nums = [99, 23, 44, 55];

/**
 *
 * @param nums массив чисел
 * @param target искомое число
 * @returns индекс искомого элемента
 */
function find(nums: number[], target: number): number | undefined {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return undefined;
}

const result = find(nums, 23);
if (result) {
    console.log(result + 2);
}

// object

type User = { name: string, age: number, lastname: string, country?: string, visitedCountry: string | string[]};

const user: User = {
    name: 'Bob',
    age: 30,
    lastname: 'Marley',
    visitedCountry: ['USA', 'UK']
};

function processUser(user: User) {
    console.log(user.name);
    console.log(user.age);
    if (user.country) {
        console.log(user.country.toUpperCase());
    }
}

processUser(user);



type ProductStatus = 'archived' | 'available' | 'out_of_stock';

type Discount = {
    percent: number
}
type Product = {
    id: number,
    title: string,
    price: number,
    status: ProductStatus,
    discount?: Discount
}
const product1: Product = {
    id: 1,
    title: 'Keyboard',
    price: 10000,
    status: 'available',
    discount: {
        percent: 20
    }
};

const product2: Product = {
    id: 2,
    title: 'Wireless Mouse',
    price: 18000,
    status: 'archived',
    discount: {
        percent: 25
    }
};

const product3: Product = {
    id: 3,
    title: 'MIDI',
    price: 68000,
    status:'out_of_stock'
};
function getFinalPrice(product: Product): number {
    if (product.status === 'archived') {
        return 0
    }
    if (!product.discount) {
        return product.price;
    }
    const discountAmount = product.price * (product.discount.percent / 100)
    return product.price - discountAmount
}
console.log(getFinalPrice(product1)); // 8000
console.log(getFinalPrice(product2)); // 0
console.log(getFinalPrice(product3)); // 68000

// Классы и объекты
