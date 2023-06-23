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

function operate(numbersAndOperator){
  if(numbersAndOperator.includes('+')){
    return sum([numbersAndOperator[0], numbersAndOperator[2]])
  }
}

function displayInput(e){

  let input = e.target.innerText
  let display = document.getElementById('display-input')

  let numberTwo
  let numberOne
  let operator
  let total

  switch(input){
  case 'AC':
    inputString = ""
    valuesStack = []
    operatorsStack = []
    display.value = ""
    break;
  case "X":
  case "-":
  case "/":
  case "+":
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

    total = operate([numberOne, operator, numberTwo]).toString()
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

    total = operate([numberOne, operator, numberTwo]).toString()
    valuesStack.push(total)
    display.value = total

  }
}


function makeNumberDivs(){
  return [1, 2, 3, '/', 4, 5, 6, 'X', 7, 8, 9, '-', 0, 'AC', '+', '.', '=', '%'].map(input => {
    let numbDiv = document.createElement('div')
    numbDiv.classList.add('numbers')
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
  calculator.id = 'calculator-line'
  calculator.appendChild(calculatorSpan)

  let numberDivs = makeNumberDivs()
  numberDivs.forEach(div => calculator.appendChild(div))

  document.body.appendChild(calculator)
}



dropCalculator()

