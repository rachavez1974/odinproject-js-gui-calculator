let inputString = ""
let operatorsStack = []
let  valuesStack= []



const hasFloatNumbers = (number) => {
  return number.includes('.')
}

const sum = function(numbers) {

  if(numbers.some(hasFloatNumbers)){
    numbers = [parseFloat(numbers[0]), parseFloat(numbers[1])]
  }else{
    numbers = [parseInt(numbers[0]), parseInt(numbers[1])]
  }

  return numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 0)
};

const multiply = (numbers) => {
  if(numbers.some(hasFloatNumbers)){
    numbers = [parseFloat(numbers[0]), parseFloat(numbers[1])]
  }else{
    numbers = [parseInt(numbers[0]), parseInt(numbers[1])]
  }

  return numbers.reduce(
  (accumulator, currentValue) => accumulator * currentValue)
}

const divide = (numbers) => {
  if(numbers.some(hasFloatNumbers)){
    numbers = [parseFloat(numbers[0]), parseFloat(numbers[1])]
  }else{
    numbers = [parseInt(numbers[0]), parseInt(numbers[1])]
  }

  return numbers.reduce(
  (accumulator, currentValue) => accumulator / currentValue)
}

const subtract = (numbers) => {
  if(numbers.some(hasFloatNumbers)){
    numbers = [parseFloat(numbers[0]), parseFloat(numbers[1])]
  }else{
    numbers = [parseInt(numbers[0]), parseInt(numbers[1])]
  }

  return numbers.reduce(
  (accumulator, currentValue) => accumulator - currentValue)
}

const mod = (numbers) => {
  if(numbers.some(hasFloatNumbers)){
    numbers = [parseFloat(numbers[0]), parseFloat(numbers[1])]
  }else{
    numbers = [parseInt(numbers[0]), parseInt(numbers[1])]
  }

  return numbers.reduce(
  (accumulator, currentValue) => accumulator % currentValue)
}




function operate(numbersAndOperator){

  if(numbersAndOperator.includes('+')){
    return sum([numbersAndOperator[0], numbersAndOperator[2]])
  }else if(numbersAndOperator.includes('X')){
    return multiply([numbersAndOperator[0], numbersAndOperator[2]])
  }else if(numbersAndOperator.includes('/')){
    return divide([numbersAndOperator[0], numbersAndOperator[2]])
  }else if(numbersAndOperator.includes('-')){
    return subtract([numbersAndOperator[0], numbersAndOperator[2]])
  }else if(numbersAndOperator.includes('%')){
    return mod([numbersAndOperator[0], numbersAndOperator[2]])
  }

}

function displayInput(e){

  let input = e.target.innerText
  let display = document.getElementById('display-input')

  let numberTwo
  let numberOne
  let operator
  let total

  function displayErrorMessage(){

    let container = document.getElementById('calculator')
    container.style.display = 'flex';
    display.value = "Error! No Division by Zero"
    setTimeout(codingCourse, 2000)

    function codingCourse() {
      valuesStack = []
      operatorsStack = []
      inputString = ""
      container.style.display = 'block';
    }
  }

  switch(input){
  case 'AC':
    inputString = ""
    valuesStack = []
    operatorsStack = []
    display.value = ""
    break;
  case '.':
    document.getElementById('.').display = true;
    inputString += input
    break;
  case "X":
  case "-":
  case "/":
  case "+":
  case "%":
    document.getElementById('.').display = false;
    valuesStack.push(inputString)
    inputString = ""
    operatorsStack.push(input)
    display.value = ""
    break;
  case '=':
    valuesStack.push(inputString)
    numberTwo = valuesStack.pop()
    numberOne = valuesStack.pop()
    operator = operatorsStack.shift()

    total = (Math.round(operate([numberOne, operator, numberTwo])*10)/10).toString()

    if(total === 'Infinity'){
      displayErrorMessage()
      return
    }

    display.value = total
    inputString = total
    break;
  default:
    inputString += input
    display.value = inputString
  }


  if(valuesStack.length === 2){
    numberTwo = valuesStack.pop()
    numberOne = valuesStack.pop()
    operator = operatorsStack.shift()

    total = (Math.round(operate([numberOne, operator, numberTwo])*10)/10).toString()
    if(total === 'Infinity'){
      displayErrorMessage()
      return
    }
    valuesStack.push(total)
    display.value = total
  }
}

function makeNumberDivs(){
  return [1, 2, 3, '/', 4, 5, 6, 'X', 7, 8, 9, '-', 0, 'AC', '+', '.', '=', '%'].map(input => {
    let numbDiv = document.createElement('div')
    numbDiv.classList.add('numbers')
    numbDiv.id = input
    if(input === '=' || input === "AC"){
      numbDiv.classList.add('equal-div')
    }

    numbDivButton = document.createElement('button')
    numbDivButton.innerText = input
    numbDivButton.addEventListener('click', displayInput)
    numbDiv.appendChild(numbDivButton)
    return numbDiv
  })
}

function dropCalculator(){
  let calculator = document.createElement("div")
  calculator.classList.add('container-calculator')
  calculator.id = "calculator"

  let input = document.createElement('input')
  input.id = "display-input"
  calculator.appendChild(input)

  let calculatorSpan = document.createElement("span")
  calculatorSpan.classList.add('line-calculator')
  calculatorSpan.id = 'calculator-line'
  calculator.appendChild(calculatorSpan)

  let numberDivs = makeNumberDivs()
  numberDivs.forEach(div => calculator.appendChild(div))

  document.body.appendChild(calculator)
}



dropCalculator()

