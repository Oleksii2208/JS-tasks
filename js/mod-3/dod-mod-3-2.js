"use strict";
// console.log("Hello world!");

// # Функції

// 1. Напиши функцію, яка приймає два параметри (a і b) та повертає їхню суму.

// function sum(a, b) {
//   return a + b;
// }

// const res = sum(5, 7);
// console.log(res);

// 1. Напиши функцію, яка приймає три параметри (a, b, c) і повертає максимальне з
//    них.

// function number(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else if (b > c && b > a) {
//     return b;
//   }
//   return c;
// }

// const res = number(3, 5, 1);
// console.log(res);

// 1. Напиши функцію, яка приймає три параметри (число, мінімум і максимум) та
//    повертає true, якщо число знаходиться між мінімумом і максимумом (включно), і
//    false, якщо ні.

// function number(number, min, max) {
//   if (number > min && number < max) {
//     return true;
//   }
//   return false;
// }

// const res = number(4, 2, 7);
// console.log(res);

// 1. Напиши функцію, яка приймає рядок і повертає перший символ цього рядка.

// function strLetter(str) {
//   return str[0];
// }

// const res = strLetter("Try");
// console.log(res);

// 1. Напиши функцію, яка приймає рядок і повертає останній символ цього рядка.

// function strLetter(str) {
//   return str[str.length - 1];
// }

// const res = strLetter("Try");
// console.log(res);

// 1. Напиши функцію, яка приймає число і повертає true, якщо число парне, і false,
//    якщо ні.

// function num(number) {
//   if (number % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// const res = num(5);
// console.log(res);

// 1. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то
//    повернути null, в іншому випадку повернути добуток цих двох чисел.

// function num(number1, number2) {
//   if (number1 === 0 || number2 === 0) {
//     return null;
//   }
//   return number1 + number2;
// }

// const res = num(5, 0);
// console.log(res);

// 1. Напиши функцію яка приймає рядок і повертає цей самий рядок але огорнутий у
//    тег div. Приклад: на вході був рядок `"Hello world"` а на виході рядок
//    `"<div>Hello world<div>"`

// function foo(str) {
//   return `<div>${str}</div>`;
// }

// const res = foo("Hello world");
// console.log(res);

// 1. Напиши функцію, яка приймає рядок і повертає кількість слів у ньому (слова
//    розділені пробілами).

// function foo(str) {
//   const strLength = str.split(" ").length;
//   return strLength;
// }

// const res = foo("Try it is watch");
// console.log(res);

// 1. Напиши функцію, яка приймає рядок і повертає його довжину помножену на
//    кількість слів в цьому рядку.

// function foo(str) {
//   const strLength = str.length * str.split(" ").length;
//   return strLength;
// }

// const res = foo("Try it is watch try");
// console.log(res);

// 1. Напиши функцію, яка приймає рядок і повертає кількість голосних літер у ньому
//    (a, e, i, o, u). Використовуйте метод includes та цикл.

// const str = "Try";
// console.log(str.includes("y"));

// function foo(str) {
//   const vowels = "aeiouy";
//   const newStr = str.toLowerCase();
//   let res = 0;

//   for (let i = 0; i < newStr.length; i++) {
//     if (vowels.includes(newStr[i])) {
//       res += 1;
//     }
//   }
//   return res;
// }

// const res = foo("Hello world");
// console.log(res);

// 1. Напиши функцію, яка приймає рядок і повертає новий рядок, де слова
//    розташовані у зворотному порядку.

// function strReverse(str) {
//   const newStr = str.split(" ").reverse().join(" ");
//   return newStr;
// }

// const res = strReverse("Hello world");
// console.log(res);

// 1. Напиши функцію, яка приймає довільну кількість аргументів і повертає true,
//    якщо всі аргументи є числами, і false, якщо ні.

// 1. Напиши функцію, яка приймає довільну кількість аргументів і повертає їх
//    об'єднаними в один рядок, розділений комами.

// function foo() {
//   const str = Array.from(arguments).join(",");
// or best metod:
//   const str = [...arguments].join(",");
//   return str;
// }

// const res = foo(7, 8, 7, 9, 8, 5);
// console.log(res);

// 1. Напиши функцію, яка приймає довільну кількість чисел і повертає їхній
//    добуток.

// function sum() {
//   const numbers = [...arguments];
//   let res = 0;
//   for (const number of numbers) {
//     res += number;
//   }
//   return res;
// }

// const res = sum(5, 8, 7, 3, 7);
// console.log(res);

// 1. Напиши функцію, яка приймає довільну кількість чисел і повертає кількість
//    непарних чисел серед них.

// function sum() {
//   const numbers = [...arguments];
//   let res = 0;
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       res += number;
//     }
//   }
//   return res;
// }

// const res = sum(5, 8, 6, 4, 7);
// console.log(res);

// 1. Напиши функцію яка приймає довільну кількість рядочків і повертає той рядок
//    що є найдовшим

// function foo() {
//   const arr = [...arguments];
//   let res = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > res.length) {
//       res = arr[i];
//     }
//   }
//   return res;
// }

// const res = foo("Try it is icecream", "City", "Hello world");
// console.log(res);

// 1. Напиши функцію яка приймає довільну кількість рядочків і обєднує їх в один
//    цілий рядок.

// function foo() {
//   const res = [...arguments].join(" ");
//   return `${res}!`;
// }

// const res = foo("Try", "it", "is", "icecream");
// console.log(res);

// 1. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то
//    повернути null, в іншому випадку повернути добуток цих двох чисел.

// function foo(num1, num2) {
//   if (num1 === 0 || num2 === 0) {
//     return null;
//   }
//   return num1 + num2;
// }

// const res = foo(4, 7);
// console.log(res);
