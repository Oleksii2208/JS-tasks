"use strict";
// console.log("Hello, world!");

//! Задача 1. Акаунт користувача

// Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу
// доставки їжі.Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час
// звернення до властивостей об'єкта.

// Використай цей стартовий код і виконай рефакторинг. Після оголошення об'єкта ми додали виклики
// методів.У консоль будуть виведені результати їх роботи.Будь ласка, нічого там не змінюй.

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// Оголошена змінна customer
// Значення змінної customer — це об'єкт із властивостями та методами
// Виклик customer.getDiscount() повертає поточне значення властивості discount
// Виклик customer.setDiscount(0.15) оновлює значення властивості discount
// Виклик customer.getBalance() повертає поточне значення властивості balance.
// Виклик customer.getOrders() повертає поточне значення властивості orders
// Виклик customer.addOrder(5000, "Steak") додає "Steak" у масив значень властивості orders та оновлює баланс
// Метод getBalance об'єкта customer використовує this
// Метод getDiscount об'єкта customer використовує this
// Метод setDiscount об'єкта customer використовує this
// Метод getOrders об'єкта customer використовує this
// Метод addOrder об'єкта customer використовує this

//! Задача 2. Склад

// Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один
// аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість
// items.
// Оголоси наступні методи класу:
// - getItems() — повертає масив поточних товарів у приватній властивості items.
// - addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну
// властивість items об'єкта.
// - removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву
// товарів у приватній властивості items об'єкта.

// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення
// класу для перевірки коректності роботи.У консоль будуть виведені результати їх роботи.Будь ласка,
// нічого там не змінюй.

// class Storage {
//   #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter((item) => item !== itemToRemove);
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//! Задача 3. Конструктор рядків

// Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який
// записується у приватну властивість value об'єкта, що створюється.
// Оголоси наступні методи класу:

// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value
// об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str(рядок) і додає його на початок значення приватної властивості
// value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної
// властивості value об'єкта, який викликає цей метод.
// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу
// для перевірки коректності роботи.У консоль будуть виведені результати їх роботи.Будь ласка, нічого
// там не змінюй.

// class StringBuilder {
//   #value;

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padEnd(str) {
//     this.#value = this.#value + str;
//   }

//   padBoth(str) {
//     this.#value = str + this.#value + str;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// Оголошений клас StringBuilder
// Властивість value у класі StringBuilder оголошена приватною
// У класі StringBuilder оголошений метод getValue
// Метод getValue повертає значення приватної властивості value екземпляра класу, який його викликає
// У класі StringBuilder оголошений метод padEnd
// Метод padEnd змінює значення приватної властивості value екземпляра класу, який його викликає
// У класі StringBuilder оголошений метод padStart
// Метод padStart змінює приватну властивість value екземпляра класу, який його викликає
// У класі StringBuilder оголошений метод padBoth
// Метод padBoth змінює значення приватної властивості value екземпляра класу, який його викликає
// У результаті виклику new StringBuilder(".") значення приватної змінної builder — це об'єкт
// Об'єкт builder не містить публічну властивість value
// Перший виклик builder.getValue() одразу після ініціалізації екземпляра повертає рядок .
// Другий виклик builder.getValue() після виклику builder.padStart("^") повертає рядок ^.
// Третій виклик builder.getValue() після виклику builder.padEnd("^") повертає рядок ^.^
// Четвертий виклик builder.getValue() після виклику builder.padBoth("=") повертає рядок =^.^=

//! Task-4

// Переробіть методи об’єкта pizzaPalace, додавши пропущене this у місцях, де
// здійснюється доступ до властивостей та методів об’єкта.
// ТЕСТИ
// • Метод checkPizza об'єкта pizzaPalace використовує this.
// • Метод order об'єкта pizzaPalace використовує this.
// • Виклик pizzaPalace.order("Smoked") повертає рядок "Замовлення прийнято, готуємо піцу «Smoked»".
// • Виклик pizzaPalace.order("Four meats") повертає рядок "Замовлення прийнято, готуємо піцу «Four meats»".
// • Виклик pizzaPalace.order("Big Mike") повертає рядок "Вибачте, піци з назвою «Big Mike» немає".
// • Виклик pizzaPalace.order("Viennese") повертає рядок "Вибачте, піци з назвою «Viennese» немає".

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);
//     // console.log(isPizzaAvailable);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));

//! Task-5
