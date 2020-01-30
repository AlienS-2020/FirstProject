// Задача №1 "Треугольник в цикле"

// let a = "";
// for (let i = 1; i <= 7; i = i + 1) {
//     a = a + "#";
//     console.log(a); 
// }


// Задача №2 "FizzBuzz". Первая часть задачи. 

// for (let i = 1; i <= 100; i++) {
//     if (!(i % 3)) {
//         console.log(i, " Fizz");
//     } else if (!(i % 5)) {
//         console.log(i, " Buzz");
//     } else {
//         console.log(i);
//     }
// };

// Задача №2 "FizzBuzz". Вторая часть задачи. 

// for (let i = 1; i <= 100; i++) {
//     if (!(i % 3) && !(i % 5)) {
//         console.log(i, " FizzBuzz");
//     } else {
//         console.log (i);
//     }
// };


// Задача №3 "Рекурсия"

// 0 - четное (true);
// 1 - нечетное (false);

// function isEven(n) {
//     n = Math.abs(n);
//     if (n == 1) {
//         return false;
//     } else if (n == 0) {
//         return true;
//     } else {
//         return isEven(n-2);
//     }
// }
// console.log(isEven(-50)); // При отрицательном значении аргумента рекурсивная функция никогда не достигнет условия выхода из рекурсии (0 или 1), поскольку значение выражения (n-2) будет стремиться к отрицательной бесконечности. Следовательно, глубина рекурсии превысит допустимое значение. Чтобы этого избежать используем Math.abs() для нашей переменной.


// Задача №3 "Рекурсия" (вариант решения с помощью тернарного оператора)

// function isEven(n) {
//     n = Math.abs(n);
//     return (n == 1) ? false : (n == 0) ? true: isEven(n - 2);
// }
// console.log(isEven(9));


// Задача №4 "Считаем бобы". Часть 1 - Функция countBs.

// function countBs(word) {
//     let b = 0;
//     for (let i = word.length - 1; i >= 0; i--) {
//         let n = word.charAt(i);
//         if (n == "b") { 
//             b++;
//         }
//     } 
//     return console.log(b); 
// }
// countBs("bubble");


// Задача №4 "Считаем бобы". Часть 2 - Функция countChar.

// function countChar(word, symbol) {
//     let b = 0;
//     for (let i = word.length - 1; i >= 0; i--) {
//         let n = word.charAt(i);
//         if (n == symbol) { 
//             b++;
//         }
//     } 
//     return console.log(b); 
// }
// countChar("bubble", "l");


