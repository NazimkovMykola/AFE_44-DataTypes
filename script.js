// ТИПИ ДАННИХ В JS
// 7 ТИПІВ ДАННИХ 

//1)BOOLEAN  - ЛОГІЧНИЙ ТИП (TRUE/FALSE)
//2)UNDEFINED - "НЕВИЗНАЧЕНИЙ" (ПОРОЖНЕЧА) яка?
//3)NULL - (ПОРОЖНЕЧА) значення
//4)SYMBOL - 
//5)STRING - строковий тип данних 'Микола', "2", "lorem ipsum" `Привіт`
//6)NUMBER - цифри 5б 15 12.36 
//7)BIGINT - великі цілі числа 3.696537979617451e+40

// це коментар !

// все що вводить користувач - це завжди рядок STRING
const btnResult = document.querySelector("#btnResult")

btnResult.addEventListener('click', function() {
const firstNumber = document.querySelector("#firstNumber").value
const secondNumber = document.querySelector("#secondNumber").value
const operation = document.querySelector("#operation").value 
const resultEl = document.querySelector("#result")
if(operation === '+') {resultEl.textContent = 'Результат: ' + Number(Number(firstNumber) + Number(secondNumber))}
if (operation === "/") {resultEl.textContent =
  "Результат: " + Number(Number(firstNumber) / Number(secondNumber))}
if (operation === "-") { resultEl.textContent =
  "Результат: " + Number(Number(firstNumber) - Number(secondNumber))}
if (operation === "*") {resultEl.textContent =
  "Результат: " + Number(Number(firstNumber) * Number(secondNumber))}
})
//конкатенація 
// '10'+'20' = 1020
// 'Микола'+'текст'='Миколатекст'

// console.log(100 * 'Микола') = NaN
// not a number - не число! 