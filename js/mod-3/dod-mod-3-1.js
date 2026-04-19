"use strict";
// console.log("Hello world!");

// # Масиви

// ## Прості задачі

// 1. Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.

// function showArr(arr) {
//   for (const item of arr) {
//     console.log(item);
//   }
// }

// const res = showArr([2, 4, 5, 6, 7, 4, 8]);
// const res2 = showArr(["Dnipro", "Odesa", "Kiev", "Poltava", "Konotop"]);

// 1. Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у
//    консоль.

// function showEveryPaired(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       console.log(arr[i]);
//     }
//   }
// }

// const res = showEveryPaired([2, 4, 5, 6, 7]);
// const res2 = showEveryPaired(["Dnipro", "Odesa", "Kiev", "Poltava", "Konotop"]);

// 1. Напиши функцію, яка приймає масив чисел та виводить лише парні числа у
//    консоль.

// function pairedNumber(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       console.log(numbers[i]);
//     }
//   }
// }

// pairedNumber([50, 20, 5, 4, 6, 7]);

// 1. Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив
//    чисел. Потрібно вивести лише ті елементи масиву які більші за max.

// function number(arr, max) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       console.log(arr[i]);
//     }
//   }
// }

// number([5, 6, 8, 7, 9, 12, 15, 3, 1, 2, 4], 4);

// 1. Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.

// function sum(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// const res = sum([10, 5, 4, 1, 5, 5]);
// console.log(res);

// 1. Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна
//    порахувати скільки разів шуканий елемент зустрічається у масиві.

// function searchElement(arr, elem) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === elem) {
//       total += 1;
//     }
//   }
//   return total;
// }

// const res = searchElement([5, 5, 4, 7, 6, 8, 7, 9, 4, 5, 5, 5, 4, 7, 8, 7], 5);
// console.log(res);

// 1. Напиши функцію яка приймає масив чисел. Функція повинна видалити усі
//    негативні(відємні числа) з масиву та повернути новий масив.

// function positiveNumber(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// const res = positiveNumber([-5, 7, 5, 8, -3, 8, 1, -4]);
// console.log(res);

// 1. Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент
//    масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до
//    нижнього регістру, в іншому випадку привести до верхнього регістру.

// function string(arr) {
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length < 6) {
//       array.push(arr[i].toLowerCase());
//     } else {
//       array.push(arr[i].toUpperCase());
//     }
//   }
//   return array;
// }

// const res = string(["True", "rebbit", "tree", "country"]);
// console.log(res);

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
//    лише непарні числа.

// function number(arr) {
//   let total = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       total.push(arr[i]);
//     }
//   }
//   return total;
// }

// const res = number([5, 4, 3, 6, 8, 2, 1, 9, 7]);
// console.log(res);

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне
//    число помножене на індекс, за яким воно знаходиться в масиві.

// function number(arr) {
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     array.push(arr[i] * i);
//   }
//   return array;
// }

// const res = number([4, 7, 5, 3, 2, 5]);
// console.log(res);

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
//    лише числа, які діляться на 3.

function num(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      array.push(arr[i]);
    }
  }
  return array;
}

const res = num([9, 6, 5, 18, 9, 17, 27]);
console.log(res);

// ## Середні задачі

// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише ті елементи які зустрічаються і в arr1 і arr2.
// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише елементи масиву arr1 яких не має у масиві arr2.
// 1. Напиши функцію яка приймає масив та знаходить мінімальний елемент.
// 1. Напиши функцію яка приймає масив та знаходить максимальний елемент.
// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за середнє значення всіх елементів масиву.
// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за власний індекс.
// 1. Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний
//    елемент та видалити його з масиву.
// 1. Напиши функцію яка приймає два параметри start та end. Функія повина
//    повернути масив де будуть числа з діапазону але лише ті у яких не має
//    цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5"
//    у собі.

// ## Складні

// 1. Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні
//    числа переміщені в початок, а всі непарні - в кінець.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
//    елемент є сумою усіх попередніх елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить
//    лише унікальні числа.
// 1. Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без
//    дублювання елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
//    елемент є середньоарифметичним всіх сусідніх елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи
//    відсортовані в порядку збільшення або зменшення.
// 1. Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною
//    елементів.

// ## Codewars

// - [Kata #1](https://www.codewars.com/kata/57a083a57cb1f31db7000028)
// - [Kata #1](https://www.codewars.com/kata/64fbfe2618692c2018ebbddb)
// - [Kata #1](https://www.codewars.com/kata/64fbfe2618692c2018ebbddb)
// - [Kata #1](https://www.codewars.com/kata/57f222ce69e09c3630000212)
// - [Kata #1](https://www.codewars.com/kata/53dc23c68a0c93699800041d)

// - [Kata #1](https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c)
// - [Kata #2](https://www.codewars.com/kata/563cf89eb4747c5fb100001b)
// - [Kata #3](https://www.codewars.com/kata/5813d19765d81c592200001a)
// - [Kata #4](https://www.codewars.com/kata/62ad72443809a4006998218a)
// - [Kata #5](https://www.codewars.com/kata/53b2ff49b82af296ce001139)
// - [Kata #6](https://www.codewars.com/kata/58f8a3a27a5c28d92e000144)
// - [Kata #7](https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118)
// - [Kata #8](https://www.codewars.com/kata/5a905c2157c562994900009d)
// - [Kata #9](https://www.codewars.com/kata/57d814e4950d8489720008db)
// - [Kata #10](https://www.codewars.com/kata/5a2be17aee1aaefe2a000151)
// - [Kata #11](https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0)
