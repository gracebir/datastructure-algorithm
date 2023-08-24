function selectionSort(arr){
    const len = arr.length
    for(let i = 0; i < len; i++){
        let min = i
        let temp = arr[i]
        for(let j = i+1; j < len; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

console.log(selectionSort(numbers))