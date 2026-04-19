"use strict";
// console.log("Hello world");

//! Задача 1. Генератор slug

// Перш, ніж розв’язувати задачу, давай визначимося із новим терміном!
// Термін slug — це зрозумілий людині унікальний ідентифікатор, який використовується
// у веб розробці для створення читабельних URL - адрес.
// Наприклад, замість того, щоб користувач побачив в адресному рядку
// mysite.com / posts / 1q8fh74tx, можна зробити slug із назви статті.У результаті
// адреса буде приємнішою для сприйняття: mysite.com / posts / arrays -for-beginners.

// Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.
// З цим розібралися? А тепер давай нарешті виконувати задачу!

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і
// повертає slug, створений із цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності
// її роботи.У консоль будуть виведені результати її роботи.

// function slugify(title) {
//   const slug = title.toLowerCase().split(" ").join("-");
//   //   const slug = titleLower.split(" ").join("-");
//   return slug;
// }

// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

//! Задача 2. Композиція масивів

// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray(масив),
// secondArray(масив) і maxLength(число).Функція повинна створювати новий масив,
// який містить усі елементи з firstArray, а потім усі елементи з secondArray.

// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна
// повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності
// її роботи.У консоль будуть виведені результати її роботи.

// function makeArray(firstArray, secondArray, maxLength) {
//   const array = firstArray.concat(secondArray);
//   const arrayLength = array.length;
//   //   console.log(arrayLength);
//   if (arrayLength > maxLength) {
//     return array.slice(0, maxLength);
//   }
//   return array;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

//! Задача 3. Фільтрація масиву чисел

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та
// значення(value) як параметри.Функція повинна повертати новий масив лише тих чисел
// із масиву numbers, які більші за значення value.
// Усередині функції:

// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и
// додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

// function filterArray(numbers, value) {
//   let array = [];
//   for (let i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] > value) {
//     //   console.log(numbers[i]);
//       array.push(numbers[i]);
//     }
//   }
//   return array;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// ----------------------------------
// function foo() {
//   const arr = Array.from(arguments); // перетворює псевдомасив у масив.
//   console.log(arguments);
//   console.log(arr);
// }

// foo(10, 20, 30);

// Зміна аргументс дозволяє нам працювати з невідомою кількістью аргументів.

// Задача на рекурсію
// Фібанача, результатом є сума двох попередніх чисел:
// 0 1 1 2 3 5 8 13 21 34 55 ...

// function fibba(index) {
//   if (index <= 2) {
//     return 1;
//   }
//   return fibba(index - 1) + fibba(index - 2);
// }
// const res1 = fibba(10);
// console.log(res1);

//! Факторіал, наприклад числа 5 це  !5 = 1 * 2 * 3 * 4 * 5;

// function factorial(number) {
//   if (number < 1) {
//     return 1;
//   }
//   return number * factorial(number - 1);
// }

// const res1 = factorial(5);
// console.log(res1);

// ----------------

// function getMap() {
//   const arr = [];

//   for (let i = 0; i < 10; i++) {
//     arr.push([" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]);
//   }

//   for (let y = 0; y < arr.length; y++) {
//     for (let x = 0; x < arr[y].length; x++) {
//       if (x < y) {
//         arr[y][x] = "0";
//       }
//       if (x > y) {
//         arr[y][x] = "1";
//       }

//       if (x === y) {
//         arr[y][x] = "*";
//       }

//       if (x === arr.length - y - 1) {
//         arr[y][x] = "*";
//       }
//       if (y === 0 || x === 0) {
//         arr[y][x] = "#";
//       }

//       if (y === arr.length - 1 || x === arr.length - 1) {
//         arr[y][x] = "#";
//       }
//     }
//   }
//   showArr(arr);
// }

// function showArr(arr) {
//   let result = "";
//   for (const item of arr) {
//     result += item.join("") + "\n";
//   }
//   console.log(result);
// }

// getMap();
