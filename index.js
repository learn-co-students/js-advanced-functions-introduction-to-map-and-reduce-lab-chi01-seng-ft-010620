// Your code here
function mapToNegativize(originalArray){
    const newArray = []
    for (let i = 0; i < originalArray.length; i++){
        newArray[i] = -originalArray[i]
    }
    return newArray
}

function mapToNoChange(array){
    return array
}

function mapToDouble(originalArray){
    const newArray = []
    for (let i = 0; i < originalArray.length; i++){
        newArray[i] = 2 * originalArray[i]
    }
    return newArray
}

function mapToSquare(originalArray){
    const newArray = []
    for (let i = 0; i < originalArray.length; i++){
        newArray[i] = originalArray[i] ** 2
    }
    return newArray
}

//

function reduceToTotal(originalArray, startingPoint = 0){
    let total = startingPoint
    for (let i = 0; i < originalArray.length; i++){
        total += originalArray[1]
    }
    return total
}

function reduceToAllTrue(originalArray){
    let value = true
    for (let i = 0; i < originalArray.length; i++){
        if (originalArray[i]){
            value = true
        } else {
            return false
        }
    }
    return value
}

function reduceToAnyTrue(originalArray){
    let value = false
    for (let i = 0; i < originalArray.length; i++){
        if (!originalArray[i]){
            value = false
        } else {
            return true
        }
    }
    return value
}