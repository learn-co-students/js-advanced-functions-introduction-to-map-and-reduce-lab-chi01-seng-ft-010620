// Your code here
const dune = ["paul", "gurney", "vladimir", "jessica", "chani"]

const nums = [1,2,3,4,5]

const mapToNegativize = (array) => {
  let negatives = []
  array.forEach(element => negatives.push(element * -1))
  return negatives
}

const mapToNoChange = (array) => {
  let newArray = []
  array.forEach(element => newArray.push(element))
  return newArray
}

const mapToDouble = (array) => {
  let doubles = []
  array.forEach(element => doubles.push(element*2))
  return doubles
}

const mapToSquare = (array) => {
  let squares = []
  array.forEach(element => squares.push(element*element))
  return squares
}


const reduceToTotal = (array, startingValue = 0) => {
  array.forEach(element => startingValue += element)
  return startingValue
}

function reduceToAllTrue(array) {
  for (let i = 0; i < array.length; i++ ) {
    if (!array[i]) return false
  }
  return true
}

function reduceToAnyTrue(array) {
  for (let i = 0; i < array.length; i++ ) {
    if (array[i]) return true
  }
  return false
}
