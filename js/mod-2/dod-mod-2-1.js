"use strict";
console.log("Hello, world");

// # Розгалуження та булеві оператори

// ## Задачі

// ```
// Задача-1
// Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance.
//  Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший
//  за 100. В іншому випадку функцію повинна повернути рядок "Goodbye".
// ```

// function foo(age, balance) {
//   if (age > 18 && balance > 100) {
//     return "Wellcome";
//   }
//   {
//     return "Goodbye";
//   }
// }

// const res1 = foo(16, 500);
// console.log(res1);

// ```
// Задача-2
// Напишіть функцію яка для магазину яка приймає кількість товару (amount) та його
// вартість(price).Функція повинна повернути рядок "Ми це купуємо" якщо загальна
// вартість не перевищує 1000, в іншому випадку функція повинна повернути рядок "Це
// занадто дорого".
// ```

// function foo(amount, price) {
//   const totalPrice = amount * price;
//   if (totalPrice <= 1000) {
//     return "Ми це купуємо";
//   } else {
//     return "Це занадто дорого";
//   }
// }

// const res1 = foo(20, 60);
// console.log(res1);

// ```
// Задача-3
// Напишіть функцію, яка приймає температуру (temp) в градусах Цельсія. Якщо
// температура нижче 0, функція повинна повернути рядок "Замерзає", якщо більше 0
// але менше 25 - "Нормальна температура", якщо більше 25 - "Спекотно".
// ```

// function weather(temp) {
//   if (temp < 0) {
//     return "Замерзає";
//   } else if (temp < 25) {
//     return "Нормальна температура";
//   }
//   return "Спекотно";
// }

// const res1 = weather(22);
// console.log(res1);

// ```
// Задача-4
// Напишіть функцію, яка приймає 2 числа: number та divisor. Якщо number ділиться
// на divisor без остатку, поверніть рядок "Ділиться", в іншому випадку поверніть
// "Не ділиться".
// ```

// function foo(number, divisor) {
//   if (number % divisor === 0) {
//     return "Ділиться";
//   }
//   return "Не ділиться";
// }

// const res1 = foo(10, 3);
// console.log(res1);

// ```
// Задача-5
// Напишіть функцію, яка приймає 2 параметри: isRaining (булевий) і hasUmbrella
// (булевий).Якщо дощить і у вас є парасоля, поверніть "Не змокнеш", якщо дощить і
// немає парасолі, поверніть "Змокнеш", в іншому випадку поверніть "Без дощу".
// ```

// function foo(isRaining, hasUmbrella) {
//   if (isRaining && hasUmbrella) {
//     return "Не змокнеш";
//   } else if (isRaining && !hasUmbrella) {
//     return "Змокнеш";
//   }
//   return "Без дощу";
// }

// const res1 = foo(false, true);
// console.log(res1);

// ```
// Задача-6
// Напишіть функцію, яка приймає оцінку студента (grade) за шкалою від 0 до 100.
// Якщо оцінка 90 і більше, поверніть "Відмінно", від 75 до 89 - "Добре", від 50
// до 74 - "Задовільно", нижче 50 - "Незадовільно".
// ```

// function studentGrade(grade) {
//   if (grade >= 90) {
//     return "Відмінно";
//   } else if (grade >= 75) {
//     return "Добре";
//   } else if (grade >= 50) {
//     return "Задовільно";
//   }
//   return "Незадовільно";
// }

// const res1 = studentGrade(50);
// console.log(res1);

// ```
// Задача-7
// Напишіть функцію, яка приймає два параметри: dayOfWeek та isHoliday. Якщо
// dayOfWeek це "Saturday" або "Sunday" або isHoliday є true, поверніть "Вихідний",
// в іншому випадку поверніть "Робочий день".
// ```

// function currentDay(dayOfWeek, isHoliday) {
//   const weekend = dayOfWeek === "Saturday" || dayOfWeek === "Sunday";
//   if (weekend || isHoliday) {
//     return "Вихідний";
//   }
//   return "Робочий день";
// }

// const res1 = currentDay("Sunday", true);
// console.log(res1);

// ```
// Задача-8
// Напишіть функцію, яка приймає один параметр year. Якщо рік ділиться на 4 і не
// ділиться на 100, або ділиться на 400, поверніть "Високосний рік", в іншому випадку
// - "Звичайний рік".
// ```

// function isLeapYear(year) {
//   // debugger;

//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return "Високосний рік";
//   }
//   return "Звичайний рік";
// }

// const res1 = isLeapYear(300);
// console.log(res1);

// ```
// Задача-9
// Напишіть функцію, яка приймає два параметри: hasInvitation (булевий) і isFriend
// (булевий).Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені", в іншому
// випадку поверніть "Вхід заборонено".
// ```

// function control(hasInvitation, isFriend) {
//   if (hasInvitation || isFriend) {
//     return "Ви запрошені";
//   }
//   return "Вхід заборонено";
// }

// const res1 = control(false, false);
// console.log(res1);

// ```
// Задача-10
// Напишіть функцію, яка приймає вік особи (age). Якщо вік менший за 12, поверніть
// "Дитина", якщо від 12 до 18, поверніть "Підліток", якщо від 18 до 60, поверніть
// "Дорослий", більше 60 - "Пенсіонер".
// ```

// function checkAge(age) {
//   if (age < 12) {
//     return "Дитина";
//   } else if (age < 18) {
//     return "Підліток";
//   } else if (age < 60) {
//     return "Дорослий";
//   }
//   return "Пенсіонер";
// }

// const res1 = checkAge(18);
// console.log(res1);

// ```
// Задача-11
// Напишіть функцію, яка приймає два параметри: isLoggedIn (булевий) та hasAdminRights
// (булевий).Якщо ви увійшли в систему і маєте права адміністратора, поверніть
// "Адмін-сторінка", якщо увійшли, але не є адміністратором, поверніть "Користувач",
// в іншому випадку - "Гість".
// ```

// function authentication(isLoggedIn, hasAdminRights) {
//   if (isLoggedIn && hasAdminRights) {
//     return "Адмін-сторінка";
//   }
//   return "Гість";
// }

// const res1 = authentication(true, false);
// console.log(res1);

// ```
// Задача-12
// Напишіть функцію, яка приймає один параметр speed. Якщо швидкість менша за 60
// км / год, поверніть "Безпечно", якщо від 60 до 100 км / год, поверніть "Увага",
// якщо більше 100 км / год, поверніть "Небезпечно".
// ```

// function speedTest(speed) {
//   if (speed < 60) {
//     return `Безпечно!, ваша швидкість ${speed}км/год`;
//   } else if (speed < 100) {
//     return `Увага!, ваша швидкість ${speed}км/год`;
//   }
//   return `Небезпечно!, ваша швидкість ${speed}км/год`;
// }

// const res1 = speedTest(145);
// console.log(res1);

// ```
// Задача-13
// Напишіть функцію, яка приймає два параметри: time та isWeekend. Якщо time менше 12
// і це не вихідний день, поверніть "Ранок буднього дня", якщо більше 12 і менше 18 і
// це вихідний, поверніть "День вихідного дня", в іншому випадку поверніть "Вечір".
// ```

// function timeOfDay(time, isWeekend) {
//   if (time < 12 && isWeekend !== true) {
//     return "Ранок буднього дня";
//   } else if (time < 18 && isWeekend === true) {
//     return "День вихідного дня";
//   }
//   return "Вечір";
// }

// const res1 = timeOfDay(20, true);
// console.log(res1);

// ```
// Задача-14
// Напишіть функцію, яка приймає два параметри: hasGlutenAllergy (булевий) та
// containsGluten(булевий).Якщо у вас є алергія на глютен і продукт містить глютен,
// поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".
// ```

// function hasGlutenAllergy(hasGlutenAllergy, containsGluten) {
//   if (hasGlutenAllergy && containsGluten) {
//     return "Не можна їсти";
//   }
//   return "Можна їсти";
// }

// const res1 = hasGlutenAllergy(true, false);
// console.log(res1);

// ```
// Задача-15
// Напишіть функцію, яка приймає один параметр age. Якщо вік менше 18, поверніть
// "Не можна купувати алкоголь", якщо 18 або більше, поверніть "Можна купувати
// алкоголь".
// ```

// function ageAdult(age) {
//   if (age < 18) {
//     return "Не можна купувати алкоголь";
//   }
//   return "Можна купувати алкоголь";
// }

// const res1 = ageAdult(22);
// console.log(res1);

// ```
// Задача-16
// Напишіть функцію, яка приймає один параметр isSunny (булевий). Якщо сонячно,
// поверніть "Вийдемо на прогулянку", якщо ні, поверніть "Залишимося вдома".
// ```

// function weather(isSunny) {
//   if (isSunny) {
//     return "Вийдемо на прогулянку";
//   }
//   return "Залишимося вдома";
// }

// const res1 = weather(false);
// console.log(res1);

// ```
// Задача-17
// Напишіть функцію, яка приймає один параметр number. Якщо число парне, поверніть
// "Парне", якщо непарне, поверніть "Непарне".
// ```

// function evenNumber(number) {
//   if (number % 2 === 0) {
//     return "Парне";
//   }
//   return "Непарне";
// }

// const res1 = evenNumber(20);
// console.log(res1);

// ```
// Задача-18
// Напишіть функцію, яка приймає два параметри: password та confirmPassword. Якщо ці
// два паролі однакові, поверніть "Паролі збігаються", якщо ні, поверніть "Паролі не
// збігаються".
// ```

// function checkPassword(password, confirmPassword) {
//   if (password === confirmPassword) {
//     return "Паролі збігаються";
//   }
//   return "Паролі не збігаються";
// }

// const res1 = checkPassword("try", "try");
// console.log(res1);

// ```
// Задача-19
// Напишіть функцію, яка приймає один параметр temperature в градусах Цельсія. Якщо
// температура нижче 0, поверніть "Зима", якщо від 0 до 15, поверніть "Весна", якщо
// від 16 до 25, поверніть "Літо", якщо більше 25, поверніть "Осінь".
// ```

// function weather(temperature) {
//   if (temperature < 0) {
//     return "Зима";
//   } else if (temperature <= 15) {
//     return "Весна";
//   } else if (temperature <= 25) {
//     return "Літо";
//   }
//   return "Осінь";
// }

// const res1 = weather(0);
// console.log(res1);

// ```
// Задача-20
// Напишіть функцію, яка приймає два параметри: number1 та number2. Якщо number1
// більше number2, поверніть "Перше більше", якщо менше, поверніть "Перше менше",
// якщо рівні, поверніть "Рівні".
// ```

// function checkNumber(number1, number2) {
//   if (number1 > number2) {
//     return "Перше більше";
//   } else if (number1 < number2) {
//     return "Перше менше";
//   }
//   return "Рівні";
// }

// const res1 = checkNumber(10, 15);
// console.log(res1);

// ```
// Задача-21
// Напишіть функцію, яка приймає один параметр isBatteryFull (булевий). Якщо
// акумулятор повний, поверніть "Не потрібно заряджати", якщо ні, поверніть
// "Заряджати".
// ```

// function checkBattery(isBatteryFull) {
//   if (isBatteryFull) {
//     return "Не потрібно заряджати";
//   }
//   return "Заряджати";
// }

// const res1 = checkBattery(false);
// console.log(res1);

// or

// function checkBattery(isBatteryFull) {
//   if (isBatteryFull >= 80) {
//     return "Не потрібно заряджати";
//   } else if (isBatteryFull >= 40) {
//     return "Заряджати";
//   }
//   return "Замінити";
// }

// const res1 = checkBattery(20);
// console.log(res1);

// ---

// ```
// Задача-22
// Напишіть функцію, яка приймає два параметри: isStudent (булевий) та hasID (булевий).
//  Якщо ви студент і маєте посвідчення, поверніть "Вхід дозволено", якщо ні,
// поверніть "Вхід заборонено".
// ```

// function checkStudent(isStudent, hasID) {
//   if (isStudent && hasID) {
//     return "Вхід дозволено";
//   }
//   return "Вхід заборонено";
// }

// const res1 = checkStudent(true, true);
// console.log(res1);

// ```
// Задача-23
// Напишіть функцію, яка приймає два параметри: temperature та isRaining. Якщо
// температура менша за 0 або йде дощ, поверніть "Потрібно носити теплий одяг", в
// іншому випадку поверніть "Легка одяг".
// ```

// function weather(temperature, isRaining) {
//   if (temperature < 0 || isRaining) {
//     return "Потрібно носити теплий одяг";
//   }
//   return "Легкий одяг";
// }

// const res1 = weather(5, true);
// console.log(res1);

// ```
// Задача-24
// Напишіть функцію, яка приймає два параметри: hasCar (булевий) та hasLicense
// (булевий).Якщо у вас є автомобіль та водійські права, поверніть "Можете водити
// машину", якщо ні, поверніть "Водити заборонено".
// ```

// function checkRights(hasCar, hasLicense) {
//   if (hasCar && hasLicense) {
//     return "Можете водити машину";
//   }
//   return "Водити заборонено";
// }

// const res1 = checkRights(true, true);
// console.log(res1);

// ```
// Задача-25
// Напишіть функцію, яка приймає два параметри: age та hasParentConsent (булевий).
// Якщо вік менше 18 і немає батьківської згоди, поверніть "Доступ заборонено", якщо
// старше 18 або є згода батьків, поверніть "Доступ дозволено".
// ```

// function checkAdult(age, hasParentConsent) {
//   if (age < 18 && !hasParentConsent) {
//     return "Доступ заборонено";
//   } else if (age > 18 || hasParentConsent) {
//     return "Доступ дозволено";
//   }
// }

// const res1 = checkAdult(16, true);
// console.log(res1);

// ```
// Задача-26
// Напишіть функцію, яка приймає два параметри: isVegetarian (булевий) та containsMeat
// (булевий).Якщо ви вегетаріанець і страва містить м'ясо, поверніть "Не можна їсти",
// в іншому випадку поверніть "Можна їсти".
// ```

// function checkEats(isVegetarian, containsMeat) {
//   if (isVegetarian && containsMeat) {
//     return "Не можна їсти";
//   }
//   return "Можна їсти";
// }

// const res1 = checkEats(true, false);
// console.log(res1);

// ```
// Задача-27
// Напишіть функцію, яка приймає два параметри: hoursWorked та overtime. Якщо ви
// працювали більше 40 годин або у вас є понаднормові, поверніть "Отримуєте бонус", в
// іншому випадку поверніть "Без бонусу".
// ```

// function totalTimeWorker(hoursWorked, overtime) {
//   if (hoursWorked > 40 || overtime) {
//     return "Отримуєте бонус";
//   }
//   return "Без бонусу";
// }

// const res1 = totalTimeWorker(41, false);
// console.log(res1);

// ```
// Задача-28
// Напишіть функцію, яка приймає два параметри: number та isPositive. Якщо число
// більше 0 і isPositive дорівнює true, поверніть "Це позитивне число", в іншому
// випадку поверніть "Це не позитивне число".
// ```

// function checkNumber(number, isPositive) {
//   if (number > 0 && isPositive) {
//     return "Це позитивне число";
//   }
//   return "Це не позитивне число";
// }

// const res1 = checkNumber(12, false);
// console.log(res1);

// ```
// Задача-29
// Напишіть функцію, яка приймає два параметри: temperature та isSunny. Якщо
// температура більше 20 і це сонячний день, поверніть "Час для прогулянки", в іншому
// випадку поверніть "Залишимося вдома".
// ```

// function weather(temperature, isSunny) {
//   if (temperature > 20 && isSunny) {
//     return "Час для прогулянки";
//   }
//   return "Залишимося вдома";
// }

// const res1 = weather(18, true);
// console.log(res1);

// ```
// Задача-30
// Напишіть функцію, яка приймає два параметри: weight та height. Якщо вага більше
// 100 кг і зріст менше 150 см, поверніть "Перевищено допустимий ліміт", в іншому
// випадку поверніть "У межах норми".
// ```

// function check(weight, height) {
//   if (weight > 100 && height < 150) {
//     return "Перевищено допустимий ліміт";
//   }
//   return "У межах норми";
// }

// const res1 = check(180, 145);
// console.log(res1);

// ```
// Задача-31
// Напишіть функцію, яка приймає два параметри: year та isLeapYear (булевий). Якщо
// рік ділиться на 4 і isLeapYear є true, поверніть "Це високосний рік", в іншому
// випадку поверніть "Звичайний рік".
// ```

// function checkYear(year, isLeapYear) {
//   const yearLeap = year % 2 === 0;
//   if (yearLeap && isLeapYear) {
//     return "Це високосний рік";
//   }
//   return "Звичайний рік";
// }

// const res1 = checkYear(400, true);
// console.log(res1);

//! Перевірка promt

// const checkAge = prompt("Enter age");
// console.log(checkAge);
// console.log(+checkAge);

// ```
// Задача-32
// Напишіть функцію, яка приймає три параметри: age, isStudent (булевий), і
// isSeniorCitizen(булевий).Якщо вік менший за 18 або є студентом, або якщо старший
// за 65 і є пенсіонером, поверніть "Знижка на квиток", в іншому випадку поверніть
// "Повна вартість квитка".
// ```

// function checkAdult(age, isStudent, isSeniorCitizen) {
//   const children = age < 18;
//   const old = age > 65;
//   if (children || isStudent || (old && isSeniorCitizen)) {
//     return "Знижка на квиток";
//   }
//   return "Повна вартість квитка";
// }

// const res1 = checkAdult(15, true, false);
// console.log(res1);

// ```
// Задача-33
// Напишіть функцію, яка приймає три параметри: temperature, isRaining, і
// hasUmbrella(булевий).Якщо температура більше 25 і йде дощ, і у вас є парасоля,
// поверніть "Візьміть парасолю та одягніться легше", якщо немає парасолі,
// поверніть "Залишайтеся вдома", в іншому випадку поверніть "Виходьте на прогулянку".
// ```

// function checkWeather(temperature, isRaining, hasUmbrella) {
//   if (temperature > 25 && isRaining && hasUmbrella) {
//     return "Візьміть парасолю та одягніться легше";
//   } else if (!hasUmbrella) {
//     return "Залишайтеся вдома";
//   } else {
//     return "Виходьте на прогулянку";
//   }
// }

// const res1 = checkWeather(25, false, true);
// console.log(res1);

// ```
// Задача-34
// Напишіть функцію, яка приймає три параметри: isMember (булевий), hasCoupon
// (булевий), і purchaseAmount.Якщо ви є членом клубу або маєте купон, і сума
// покупки більше 100, поверніть "Отримаєте знижку", в іншому випадку поверніть
// "Знижка не доступна".
// ```

// function checkSale(isMember, hasCoupon, purchaseAmount) {
//   const totalPrice = purchaseAmount > 100;
//   //   console.log(totalPrice);

//   if ((isMember || hasCoupon) && totalPrice) {
//     return "Отримаєте знижку";
//   }
//   return "Знижка не доступна";
// }

// const res1 = checkSale(false, true, 150);
// console.log(res1);

// ```
// Задача-35
// Напишіть функцію, яка приймає два параметри: password і confirmPassword. Якщо
// password містить як мінімум одну цифру і збігається з confirmPassword, поверніть
// "Пароль прийнято", в іншому випадку поверніть "Пароль не відповідає вимогам".
// ```

function checkPassword(password, confirmPassword) {}

// ```
// Задача-36
// Напишіть функцію, яка приймає три параметри: isOnline (булевий), hasCamera
// (булевий), і hasMicrophone(булевий).Якщо ви онлайн і маєте камеру або мікрофон,
// поверніть "Готові до відеоконференції", якщо ви не онлайн або не маєте жодного з
// них, поверніть "Немає можливості для відеоконференції".
// ```

// ```
// Задача-37
// Напишіть функцію, яка приймає три параметри: currentTime, isWeekend, і isHoliday.
// Якщо зараз менше 8 ранку і це не вихідний день, і це не свято, поверніть "Скоро 
// час на роботу", в іншому випадку поверніть "Вільний час".
// ```

// ```
// Задача-38
// Напишіть функцію, яка приймає три параметри: temperature, isSnowing, і hasHeater 
// (булевий).Якщо температура нижче 0 і йде сніг, і у вас є обігрівач, поверніть 
// "Тепло та затишно", якщо обігрівача немає, поверніть "Потрібно зігрітися", в 
// іншому випадку поверніть "Погода нормальна".
// ```

// ```
// Задача-39
// Напишіть функцію, яка приймає три параметри: age, hasDriverLicense (булевий), і 
// isInsured(булевий).Якщо ви старше 18 років, маєте водійське посвідчення і 
// страховку, поверніть "Можна керувати автомобілем", в іншому випадку поверніть 
// "Не можна керувати автомобілем".
// ```

// ```
// Задача-40
// Напишіть функцію, яка приймає три параметри: currentDay, hasMeeting (булевий), і 
// isHoliday.Якщо сьогодні понеділок, середа або п'ятниця, і у вас є зустріч, і це 
// не свято, поверніть "Є зустріч", в іншому випадку поверніть "Немає зустрічі".
// ```

// ```
// Задача-41
// Напишіть функцію, яка приймає три параметри: itemPrice, isDiscounted (булевий), 
// і discountAmount.Якщо ціна товару більше 1000, і він знижений на 10 % або більше, 
// поверніть "Скидка доступна", в іншому випадку поверніть "Скидка не доступна".
// ```

// ---

// ```
// Задача-42
// Напишіть функцію, яка приймає один параметр dayOfWeek. Використовуючи switch, 
// поверніть "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота" або 
// "Неділя" залежно від введеного числа(1 - Понеділок, 2 - Вівторок, і т.д.).Якщо 
// введене число не в діапазоні від 1 до 7, поверніть "Невідомий день".
// ```

// ```
// Задача-43
// Напишіть функцію, яка приймає один параметр grade. Використовуючи switch, 
// поверніть "Відмінно", "Добре", "Задовільно", "Незадовільно" в залежності від 
// оцінки: "A" - "Відмінно", "B" - "Добре", "C" - "Задовільно", "D" або "F" - 
// "Незадовільно".
// ```

// ```
// Задача-44
// Напишіть функцію, яка приймає один параметр fruit. Використовуючи switch, 
// поверніть "Цитрус", "Яблуко", "Груша", або "Ягода" в залежності від введеного 
// фрукта.Наприклад, "Лимон", "Апельсин", "Грейпфрут" повинні повернути "Цитрус", 
// "Яблуко" - "Яблуко", "Груша" - "Груша", "Полуниця", "Малина", "Чорниця" - "Ягода".
// ```

// ```
// Задача-45
// Напишіть функцію, яка приймає один параметр vehicleType. Використовуючи switch, 
// поверніть "Легковий автомобіль", "Вантажівка", "Мотоцикл", або "Інше" в 
// залежності від введеного типу транспортного засобу.Наприклад, "Car" - 
// "Легковий автомобіль", "Truck" - "Вантажівка", "Motorcycle" - "Мотоцикл", і інші 
// випадки - "Інше".

// ```

// Задача-46 Напишіть функцію, яка приймає один параметр animal. Використовуючи
// switch, поверніть "Ссавець", "Птах", "Риба", або "Рептилія" в залежності від
// введеної тварини. Наприклад, "Кішка", "Собака", "Кінь" - "Ссавець", "Голуб",
// "Орлан", "Горобець" - "Птах", "Лосось", "Тунець", "Тріска" - "Риба", "Ящірка",
// "Черепаха", "Змія" - "Рептилія".

// ```
// Задача-47
// Напишіть функцію, яка приймає один параметр weather. Використовуючи switch, 
// поверніть "Сонячно", "Хмарно", "Дощ", або "Сніг" в залежності від введеного типу 
// погоди.Наприклад, "Sunny" - "Сонячно", "Cloudy" - "Хмарно", "Rainy" - "Дощ", 
// "Snowy" - "Сніг".
// ```

// ```
// Задача-48
// Напишіть функцію, яка приймає один параметр mood. Використовуючи switch, 
// поверніть "Щасливий", "Сумний", "Злий", або "Здивований" в залежності від 
// введеного настрою.Наприклад, "Happy" - "Щасливий", "Sad" - "Сумний", "Angry" - 
// "Злий", "Surprised" - "Здивований".
// ```

// ```
// Задача-49
// Напишіть функцію, яка приймає один параметр month. Використовуючи switch, 
// поверніть назву сезону("Весна", "Літо", "Осінь", "Зима") в залежності від місяця.
// Наприклад, "Березень", "Квітень", "Травень" - "Весна", "Червень", "Липень", 
// "Серпень" - "Літо", "Вересень", "Жовтень", "Листопад" - "Осінь", "Грудень", 
// "Січень", "Лютий" - "Зима".
// ```

// ```
// Задача-50
// Напишіть функцію, яка приймає один параметр color. Використовуючи switch, 
// поверніть "Теплий колір" або "Холодний колір" в залежності від кольору.Наприклад, 
// "Red", "Orange", "Yellow" - "Теплий колір", "Blue", "Green", "Purple" - 
// "Холодний колір".
// ```

// ```
// Задача-51
// Напишіть функцію, яка приймає один параметр continent. Використовуючи switch, 
// поверніть назву континенту або "Невідомий континент" в залежності від введеного 
// значення.Наприклад, "Africa", "Europe", "Asia", "North America", "South America", 
// "Antarctica", "Australia" - відомі континенти, інші випадки - "Невідомий 
// континент".
// ```

// ---

// ## Task 1

// Яким буде результат виразів?

// ```js
// console.log(true && 3); //3
// console.log(false && 3); // false
// console.log(true && 4 && "kiwi"); //'kiwi'
// console.log(true && 0 && "kiwi"); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); //true
// console.log(true || false || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); // 3
// ```

// ```js
// console.log(1 && 5); //5
// console.log(5 && 1); //1
// console.log(0 && 2); //0
// console.log(2 && 0); //0
// console.log("" && "Mango"); //''
// console.log("Mango" && ""); //''
// console.log("Mango" && "Poly"); //'Poly'
// console.log("Poly" && "Mango"); //'Mango'
// ```

// ```js
// console.log(true || false);
// console.log(false || true);
// console.log(true || true);

// console.log(3 || false);
// console.log(false || 3);
// console.log(3 || true);
// console.log(true || 3);
// ```

// ```js
// console.log(!true);
// console.log(!false);
// console.log(!3);
// console.log(!'Mango');
// console.log(!0);
// console.log(!'');

// const isOnline = true;
// const isNotOnline = !isOnline;

// console.log(true && false);
// console.log(false && true);
// console.log(true && true);
// console.log(false && false);

// console.log(true || false);
// console.log(false || true);
// console.log(true || true);
// console.log(false || false);

// console.log(!true);
// console.log(!false);
// console.log(!!true);
// console.log(!!false);

// console.log(1 === 1 && 2 === 2);
// console.log(1 === 2 && 2 === 2);
// console.log(1 === 1 || 2 === 2);
// console.log(1 === 2 || 2 === 2);

// console.log(1 > 2 && 2 < 3);
// console.log(1 < 2 && 2 < 3);
// console.log(1 > 2 || 2 < 3);
// console.log(1 < 2 || 2 < 3);

// console.log(0 && 3);
// console.log(3 && 0);
// console.log(0 || 3);
// console.log(3 || 0);

// console.log('' || 'apple');
// console.log('orange' || '');
// console.log('' && 'banana');
// console.log('grape' && '');

// console.log(0 || false);
// console.log(false || 0);
// console.log(1 && 'cherry');
// console.log('banana' && 1);
// console.log(null && 'pear');
// console.log('peach' && undefined);
// console.log(undefined || 'plum');
// console.log('melon' || null);
// console.log(undefined && false);
// console.log(true || 'watermelon');
// console.log('watermelon' || true);
// console.log(false && 'pineapple');
// console.log('pineapple' && false);
// console.log(NaN || 'kiwi');
// console.log('kiwi' || NaN);
// console.log(NaN && 'mango');
// console.log('mango' && NaN);
// console.log(Infinity || 'apricot');
// console.log('apricot' || Infinity);
// console.log(Infinity && 'blueberry');
// console.log('blueberry' && Infinity);
// console.log(null || undefined);
// ```

// ---

// ## Codewars

// 1. [Kata](https://www.codewars.com/kata/5672a98bdbdd995fad00000f)
// 1. [Kata](https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097)
// 1. [Kata](https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript)
