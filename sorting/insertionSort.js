function insertSort(arr){
    let len = arr.length
    for(let i = 0; i < len; i++){
        if(arr[i] < arr[0]){
            arr.unshift(arr.splice(i, 1)[0])
        } else {
            for(let j = 1; j < i; j++){
                if(arr[i] > arr[j - 1] && arr[i] < arr[j]){
                    arr.splice(j,0,arr.splice(i, 1)[0])
                }
            }
        }
    }
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

insertSort(numbers)
console.log(numbers)
