function mergeSort(arr){
    if(arr.length === 1){
        return arr
    }

    const len = arr.length
    const middle = Math.floor(len / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right){
    const result = []
    let leftIndex = 0
    let rightIndex = 0
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

console.log(mergeSort(numbers))