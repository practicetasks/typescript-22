# Задача

Создайте интерфейс Exportable
```ts
export(): string
```

_означает, объект можно экспортировать в строку (например в CSV, excel)_

#### Наследники
UserProfile
```
username: string
email: string
```

Invoice
```
id: number
amount: number
```

ChatMessage:
```
sender: string
text: string
```

1. Каждый класс должен реализовать интерфейс Exportable.
2. Метод export() должен возвращать строку:
```
UserProfile -> "User: <username>, Email: <email>"
Invoice -> "Invoice <id>, Amount: <amount>"
ChatMessage -> "<sender>: <text>"
```

```ts
const userProfile = new UserProfile('robert', 'bob@mail.com');
console.log(userProfile.export()); // "User: robert, Email: bob@mail.com

const invoice = new Invoice(998, 15000);
console.log(invoice.export()); // "Invoice 998, Amount: 15000"

const chatMessage = new ChatMessage('dylan', 'im omw');
console.log(chatMessage.export()); // "dylan: im omw"
```