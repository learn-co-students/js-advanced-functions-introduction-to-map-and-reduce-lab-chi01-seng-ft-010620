function mapToNegativize(sourceArray) {
    return sourceArray.map(function(element) {
        return element * -1
    })
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(function(element) {
        return element
    })
}

function mapToDouble(sourceArray) {
    return sourceArray.map(function(element) {
        return element * 2
    })
}

function mapToSquare(sourceArray) {
    return sourceArray.map(function(element) {
        return element ** 2
    })
}

function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce(function(total, element) {
        return element + total
    }, startingPoint)
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.every(function(element) {
        if (element) {
            {return true}
        }
    })
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.some(function(element) {
        if (element) {
            {return true}
        }
    })
}