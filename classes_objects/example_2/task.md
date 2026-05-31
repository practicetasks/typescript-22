

1. Создать класс `Product` - (`name`, `price`)
2. Создать класс `Category` - (`name`, `products`)
    - метод `addProduct(product: Product)`
    - метод `getMostExpensiveProduct()` - должен вернуть самый дорогой товар, в виде объекта
    - метод `getLeastExpensiveProduct()` - должен вернуть самый дешевый товар, в виде объекта
    - метод `getProductsInRange(min,max)` - должен вернуть массив товаров, который находится в указанном диапазоне
3. Создать объект `Category` заполнить несколькими товарами
4. Распечатать название и стоимость всех товаров категорий
5. Распечатать сумму всех товаров


```typescript
const result1 = category.getProductsInRange(1000, 1500); // получить товары со стоимость от 1000 до 1500
const result2 = category.getProductsInRange(1000); // получить товары со стоимость от 1000
const result3 = category.getProductsInRange(); // получить все товары
```


```
<название категорий> (товаров <количество_товаров>)
- <название товара> <стоимость>
- <название товара> <стоимость>
- <название товара> <стоимость>
- <название товара> <стоимость>

сумма: ___
```



```typescript
const product = category.getMostExpensiveProduct();
if (product) {
    console.log(product.name, product.price);
}
```





