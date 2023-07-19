import './style.css'

const numberOfCupsOfCoffee = 2
const fullName = 'Melissa'

console.log(`${fullName} drinks ${numberOfCupsOfCoffee} cups of coffee a day.`)

const aboutMe = {
  fullName: 'Melissa Gwyn',
  luckyNumber: 88,
  favoriteMovies: [
    'Velvet Goldmine',
    'Drop Dead Gorgeous',
    'Kikis Delivery Service',
  ],
}

let userName = window.prompt('What is your name? ')

console.log(`Hello ${userName}. Nice to meet you.`)

const firstOperand = Number(window.prompt('Give me a number.', ''))

const secondOperand = Number(window.prompt('Give me another number.', ''))

const sum = firstOperand + secondOperand

const difference = firstOperand - secondOperand

const product = firstOperand * secondOperand

const quotient = firstOperand / secondOperand

const remainder = firstOperand % secondOperand

console.log(
  `If you add ${firstOperand} and ${secondOperand} you will get ${sum}.`
)

console.log(
  `If you subtract ${secondOperand} from ${firstOperand} you will get ${difference}.`
)

console.log(
  `If you multiply ${firstOperand} and ${secondOperand} you will get ${product}.`
)

console.log(
  `If you divide ${firstOperand} by ${secondOperand} you will get ${quotient}.`
)

console.log(
  `The remainder of ${firstOperand} into ${secondOperand} is ${remainder}.`
)

const numbers = [
  26449, 39860, 41115, 15999, 13000, 49141, 37249, 32322, 43385, 39192, 34262,
  23934, 12529, 47862, 40206, 18214, 34297, 35263, 34819, 44873, 27479, 20241,
  45968, 45105, 45120, 46372, 46804, 14526, 37541, 28530, 25209, 17406, 49226,
  15434, 13408, 15701, 24377, 49941, 47850, 35004, 40811, 43800, 38935, 35710,
  26314, 30268, 17468, 14879, 22783, 17080, 43336, 45648, 25371, 24369, 35248,
  13499, 14730, 35657, 15825, 41056, 38757, 49861, 47032, 40222, 22927, 38215,
  45474, 15627, 13682, 26042, 13628, 13122, 35642, 30232, 28819, 19333, 33284,
  15378, 47964, 45541, 43641, 17792, 24341, 31941, 29338, 42394, 12733, 29040,
  31106, 38256, 14868, 48161, 21785, 13442, 43452, 33385, 18784, 49664, 25525,
  33604,
]

const smallest = Math.min(...numbers)

console.log(`${smallest} is the smallest number in the array`)

const largest = Math.max(...numbers)

console.log(`${largest} is the largest number in the array`)

let i = 0
let arraySum = 0

while (i < numbers.length) {
  arraySum += numbers[i]
  i++
}
console.log(`${arraySum} is the sum of the array`)

const average = arraySum / numbers.length

console.log(`the average of the array is ${average}`)

const stats = {
  smallest: smallest,
  largest: largest,
  sum: arraySum,
  average: average,
}

console.log(`${stats.smallest},${stats.largest},${stats.sum},${stats.average}`)
