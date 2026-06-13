# Задача

Создайте класс `Student` {name, age, grade}

1. Сделать поля приватными
2. Создать геттеры и сеттеры
3. Добавить проверки в сеттарех:
    - `age` не должен быть меньше 0
    - `grade` должен быть в диапазоне 0.0 до 10.0
    - `name` не может быть пустым
4. Добавить метод `printStudentInfo()`, который выводит информацию о студенте
   ```
   Имя: <...>
   Возраст: <...>
   Средний балл: <...>
   ```

```ts
const student = new Student('Алексей', 20, 8.5);

student.printStudentInfo();

student.setAge(-5); // Некорректный возраст
student.setGrade(11.0); // Некорректный средний балл
student.setName(''); // Пустое имя

student.printStudentInfo();

student.setAge(22); 
student.setGrade(9.0);
student.setName('Мария');

student.printStudentInfo();
```



