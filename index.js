// ЗАДАНИЕ 1 :

// (5 >= 7) || ("javascript" != "java")
// Результат: false || true = true

// (11 * 3) == 99 && true
// Результат: 33 == 99 && true = false && true = false

// true && !false
// Результат: true && true = true

// Итоговый результат: true

// ЗАДАНИЕ 2

const age = Math.random() * (101 - 1);
if (age >= 10 && age <= 59) {
  console.log("Вам еще работать и работать")
} else if (age > 59) {
  console.log("Вам пора на пенсию")
} else if (age >= 1 && age <= 17) {
  console.log("Вам еще рано работать")
}

// Задание 3 

const n = Math.floor(Math.random() * 1001); 

if (n % 10 === 1 && n % 100 !== 11) {
   console.log("На ветке сидела " + n + " ворона");
}
else if (n % 10 === 2 && n % 100 !== 12 || n % 10 === 3 && n % 100 !== 13 || n % 10 === 4 && n % 100 !== 14) {
   console.log("На ветке сидело " + n + " вороны");
}
else {
   console.log("На ветке сидело " + n + " ворон");
}


// Задание 4

const number1 = Math.floor(Math.random() * 201) - 100;
const number2 = Math.floor(Math.random() * 201) - 100;
const number3 = Math.floor(Math.random() * 201) - 100;

console.log("Сгенерированные числа:", number1, number2, number3);

var maxNumber = number1;
if (number2 > maxNumber) {
  maxNumber = number2;
}
if (number3 > maxNumber) {
  maxNumber = number3;
}

console.log("Наибольшее число:", maxNumber);

var minNumber = number1;
if (number2 < minNumber) {
  minNumber = number2;
}
if (number3 < minNumber) {
  minNumber = number3;
}

console.log("Наименьшее число:", minNumber);

// Задание 5 

const weightApple = 100;
const weightOrange = 150;
const numberOfApple = Math.floor(Math.random() * 11);
const numberOfOranges = Math.floor(Math.random() * 11)
const totalWeightApples = weightApple * numberOfApple;
const totalWeightOranges = weightOrange * numberOfOranges;
console.log("Яблок:" + numberOfApple)
console.log("Апельсинов:" + numberOfOranges)
if (totalWeightApples > totalWeightOranges) {
  console.log("Бери яблоки!")
} else if (totalWeightOranges > totalWeightApples){
  console.log("Бери апельсины!")
}
