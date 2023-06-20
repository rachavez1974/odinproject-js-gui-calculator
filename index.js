function makeNumberDivs(){
  return [1, 2, 3, '/', 4, 5, 6, 'X', 7, 8, 9, '-', 0, '=', '+'].map(input => {
    let numbDiv = document.createElement('div')
    numbDiv.classList.add('numbers')
    if(input === '='){
      numbDiv.classList.add('equal-div')
    }
    numbDivButton = document.createElement('button')
    numbDivButton.innerText = input
    numbDiv.appendChild(numbDivButton)
    return numbDiv
  })
}

function dropCalculator(){
  let numbers = []

  function handleInput(e){
    numbers.push(e.target.value)
    console.log(numbers)
  }

  let calculator = document.createElement("div")
  calculator.classList.add('container-calculator')
  calculator.id = "calculator"

  let input = document.createElement('input')
  input.addEventListener('change', handleInput)
  calculator.appendChild(input)

  let calculatorSpan = document.createElement("span")
  calculatorSpan.classList.add('line-calculator')
  calculator.id = 'calculator-line'
  calculator.appendChild(calculatorSpan)

  let numberDivs = makeNumberDivs()
  numberDivs.forEach(div => calculator.appendChild(div))

  let equalDiv = document.createElement('div')
  equalDiv.classList.add('equal-div')
  let equalButton = document.createElement('button')
  equalButton.innerText = '='
  // calculator.appendChild(equalDiv)
  // equalDiv.appendChild(equalButton)

  // let operatorDivs = makeOperations()
  // operatorDivs.forEach(operatorDiv => calculator.appendChild(operatorDiv))
  document.body.appendChild(calculator)
}



dropCalculator()

