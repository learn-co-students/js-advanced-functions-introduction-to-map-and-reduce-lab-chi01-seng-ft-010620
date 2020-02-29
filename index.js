function mapToNegativize(sourceArray){
    return sourceArray.map(el => -el);
}
function mapToNoChange(sourceArray){
    return sourceArray
}
function mapToDouble(sourceArray){
    return sourceArray.map(el => 2*el)
}
function mapToSquare(sourceArray){
    return sourceArray.map(el => el**2)
}

function reduceToTotal(sourceArray, startingPoint=0){
    return sourceArray.reduce((sv, el) => {return sv+el},startingPoint )
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