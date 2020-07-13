const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    console.log("numbers is pressed")
  })
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
  calculatorScreen.value = number
}
