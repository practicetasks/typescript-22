
# Задача

1. Создать абстрактный класс `Notification`
   - recipient - получатель
   - message - текст уведомления
   - метод getInfo():
     ```
     Recipient: <получатель>, Message: <текст>
     ```
   - абстрактный метод send(): void
2. Создайте классы-наследники
   - EmailNotification
   - SmsNotification
   - PushNotification
3. Каждый класс должен реализовать метод send() по своему
   ```
   Sending email to user@mail.com: Hello
   ```
   ```
   Sending SMS to +7777123213: Hello
   ```
   ```
   Sending push notification to user123: Hello
   ```

```ts
const emailNotifcation = new EmailNotification('user@mail.com', 'Hello');
const smsNotification = new SmsNotification('+7777123213', 'Hello');
const pushNotification = new PushNotification('user123', 'Hello');

console.log(emailNotifcation.getInfo());
emailNotifcation.send();

console.log(smsNotification.getInfo());
smsNotification.send();

console.log(pushNotification.getInfo());
pushNotification.send();
```