# Задача

1. Создать класс Task(id - изначально 0, name, status - изначально NEW) 

    <details>
    <summary>статусы задач</summary>
    
    ```typescript
    type TaskStatus = 'NEW' | 'IN_LINE' | 'IN_WORK' | 'TESTING' | 'CLOSED';
    ```
    
    </details>


2. Создать класс TaskManager(tasks - изначально пустой массив) - хранилище задач
    - create(task: Task) - принимает задачу, присваивает уникальный id и добавляет в список
    - getTasksByStatus(status: TaskStatus) - принимает статус, должен вернуть список задач с данным статусом
    - getTaskById(id: number) - принимает id, должен вернуть один объект найденной задачи, иначе null
    - removeTaskById(id: number) - принимает id, удаляет найденную задачу


```typescript
const taskManager = new TaskManager();

const task = new Task('Реализовать страницу товара');
console.log(task.id);     // 0
console.log(task.name);   // Реализовать страницу товара
console.log(task.status); // NEW

taskManager.create(task);

console.log(task.id);     // 1
console.log(task.name);   // Реализовать страницу товара
console.log(task.status); // NEW

const secondTask = new Task('Реализовать страницу корзины');
console.log(secondTask.id); // 0
taskManager.create(secondTask);
console.log(secondTask.id); // 2

let newTasks = taskManager.getTasksByStatus('NEW');
console.log(newTasks.length); // 2

task.status = 'IN_WORK';

newTasks = taskManager.getTasksByStatus('NEW');
console.log(newTasks.length); // 1

const foundById = taskManager.getTaskById(2);
if (foundById) {
    console.log(foundById.name); // Реализовать страницу корзины
}

const notFoundById = taskManager.getTaskById(5);
if (notFoundById) {
   console.log(notFoundById.name);  // НЕ ДОЛЖЕН СРАБОТАТЬ
} else {
   console.log(notFoundById); // null
}

taskManager.removeById(1);

const notFoundByIdAgain = taskManager.getTaskById(1);
if (notFoundByIdAgain) {
   console.log(notFoundByIdAgain.name);  // НЕ ДОЛЖЕН СРАБОТАТЬ
} else {
   console.log(notFoundByIdAgain); // null
}
```

