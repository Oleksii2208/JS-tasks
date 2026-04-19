"use strict";
// console.log("Hello, world");

// # Масиви та методи рядкочків

// 1. Напиши цикл, який виведе на консоль числа від 1 до 10.

// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
// }

// 1. Напиши цикл, який виведе на консоль парні числа від 1 до 20.

// for (let i = 1; i <= 20; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 1. Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100.

// const order = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
//   42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
// ];

// console.table(order);

// function calculateTotalPrice(order) {
//   let sumOrder = 0;
//   for (const element of order) {
//     sumOrder += element;
//   }
//   return sumOrder;
// }

// console.log(calculateTotalPrice(order));

// let sum = 0;
// for (let i = 1; i <= 100; i += 1) {
//   sum += i;
//   // console.log(sum);
// }
// console.log(sum);

// 1. Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до
//    10).

// for (let i = 1; i <= 10; i += 1) {
//   const table = 7 * i;
//   const res = `7 * ${i} = ${table}`;
//   console.table(res);
// }

// 1. Напиши цикл, який обчислить факторіал числа, введеного користувачем
//    (наприклад, факторіал числа 5: `!5 = 1 * 2 * 3 * 4 * 5`).

// const factorial = +prompt("Enter number");
// let res = 1;
// for (let i = 1; i <= factorial; i += 1) {
//   res = res * i;
// }
// console.log(res);

// 1. Напиши цикл, який виведе кожну другу літеру рядочку "Hello world"

// const str = "Hello world";
// let everyTwoLetter = "";
// for (let i = 1; i < str.length; i += 2) {
//   everyTwoLetter += str[i];
// }
// console.log(everyTwoLetter);

// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому
//    порядку.

// const str = "Hello world";
// let strReverse = "p";
// for (let i = str[str.length - 1]; i >= str[0]; i -= 1) {
//   console.log(i);

//   strReverse += [i];
// }
// console.log(strReverse);

// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне
//    пробіл.

// const str = "Hello world";

// for (let i = 0; i <= str.length - 1; i += 1) {
//   if (str[i] === " ") {
//     break;
//   }
//   let newStr = str[i];
//   console.log(newStr);
// }

// 1. Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".

// const str = "JavaScript";
// let newStr = "";
// for (let i = 0; i < str.length; i += 2) {
//   newStr += str[i];
//   console.log(newStr);
// }

// 1. Напиши функцію, яка приймає рядок та повертає перевернутий рядок

// function strReverse(str) {
//   const strReverse = str.split(" ").reverse().join(" ");
//   return strReverse;
// }

// const res1 = strReverse("TRY Java");
// console.log(res1);

// 1. Напиши функцію, яка приймає рядок та повертає рядок де кожен другий символ у
//    верхньому регістрі

// function strUpper(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i += 1) {
//     if (i % 2 !== 0) {
//       newStr += str[i].toUpperCase();
//     } else {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// const res1 = strUpper("java script");
// console.log(res1);

// 1. Напиши функцію getString(str1, str2, count). Функція повинна додати str2 до
//    рядочка str1 стільки разів скільки вказали у параметрі count.

// function getString(str1, str2, count) {
//   let newStr = str1;
//   for (let i = 0; i < count; i++) {
//     newStr += str2;
//   }
//   return newStr;
// }

// const res1 = getString("try", "tree", 2);
// console.log(res1);
