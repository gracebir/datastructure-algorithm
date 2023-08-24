function bubbleSort(arr){
    const len = arr.length
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    return arr
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

console.log(bubbleSort(numbers))

