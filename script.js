const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
  calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    updateScreen(event.target.value)
  })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number
  } else {
    currentNumber += number
  }
}

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.targer.value)
    updateScreen(currentNumber)
  })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
  })
})

const inputOperator = (operator) => {
  prevNumber = currentNumber
  calculationOperator = operator
  currentNumber = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
   console.log('equal button is pressed')
})

const calculate = () => {
   let result = ''
   switch(calculationOperator) {
     case '+':
       result = parseInt(prevNumber) + parseInt(currentNumber) 
       break
     case '-':
       result = parseInt(prevNumber) - parseInt(currentNumber)
       break
     case '*':
       result = parseInt(prevNumber) * parseInt(currentNumber)
       break
     case '/':
       result = parseInt(prevNumber) / parseInt(currentNumber)
       break
     default:
       return
    }
    currentNumber = result
    calculatinOperator = ''
}

equalSign.addEventListener('click', () => {
    calculate() 
    updateScreen(currentNumber)
})
