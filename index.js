// Your code here
const mapToNegativize = (array) => {
    const newArray = []
    array.map(a => newArray.push(-a))
    return newArray
}

const mapToNoChange = (array) => {
    const newArray = []
    array.map(a => newArray.push(a))
    return newArray
}

const mapToDouble = (array) => {
    const newArray = []
    array.map(a => newArray.push(a*2))
    return newArray
}

const mapToSquare = (array) => {
    const newArray = []
    array.map(a => newArray.push(a*a))
    return newArray
}

const reduceToTotal = (array, startingPoint=0) => {
    let total = array.reduce((accumulator, value) => {
        return accumulator + value
    }, startingPoint)
    return total
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }
