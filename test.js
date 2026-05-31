const product1 = {
    id: 1,
    title: 'Keyboard',
    price: 10000,
    status: 'available',
    discount: {
        percent: 20
    }
};

const product2 = {
    id: 2,
    title: 'Wireless Mouse',
    price: 18000,
    status: 'archived',
    discount: {
        percent: 25
    }
};

const product3= {
    id: 3,
    title: 'MIDI',
    price: 68000,
    status:'out_of_stock'
};
function getFinalPrice(product){
    const discountAmount = product.price * (product.discount.percent / 100)
    return product.price - discountAmount
}
console.log(getFinalPrice(product1)); // 8000
console.log(getFinalPrice(product2)); // 0
console.log(getFinalPrice(product3));