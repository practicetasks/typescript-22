# Задача

1. Создать интерфейс PaymentMethod
    ```ts
    pay(amount: number): void;
    refund(amount: number): void;
    ```
2. Создать классы, которые реализует данный интерейс
    - CardPayment
    - KaspiQRPayment
    - CryptoPayment
3. Каждый класс должен реализовать метод по своему:
   ```
   Paying 15000 KZT by card
   Refunding 15000 KZT by card
   ```
   ```
   Paying 15000 KZT by Kaspi
   Refunding 15000 KZT by Kaspi
   ```
   ```
   Paying 15000 KZT with crypto
   Refunding 15000 KZT with crypto
   ```



