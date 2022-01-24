const numbers = [ 2, 4, 8, 9]

const addTwo = number => number + 2
const isMoreThan5 = number => number > 5
const result = numbers.filter(isMoreThan5)

//const result = numbers.map(addTwo)

//const result = mapArray(addTwo, numbers)

result

function mapArray(transform, array) {
    let transformedArray = []
    for(let i = 0; i < array.length; i++) {
        const currentItem = array[i]            
        const transformed = transform(currentItem) 
        transformedArray.push(transformed)
        //or just transformedArray.push(transform(array[i]))
    }
    return transformedArray
}

function filterArray(predicate, array) {
    let filteredArray = []
    for(let i = 0; i < array.length; i++) {
        const currentItem = array[i]
        if(predicate(currentItem)) {
            filteredArray.push(currentItem)
        }
    }
    return filteredArray


}

