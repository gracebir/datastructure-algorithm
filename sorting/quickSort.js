function quickSort(arr){
    return quickSortHelper(arr, 0, arr.length - 1)
}

function quickSortHelper(items, left, right){
    let index;
    if(items.length > 1){
        index = partition(items, left, right)
        if(left < index - 1){
            quickSortHelper(items, left, index-1)
        }
        if(index < right){
            quickSortHelper(items, index, right)
        }
    }
    return items
}

function partition(array, left, right){
    let pivot = array[Math.floor((right + left) / 2)]
    while(left <= right){
        while(pivot > array[left]){
            left++
        }
        while(pivot < array[right]){
            right--
        }
        if(left <= right){
            let temp = array[left]
            array[left] = array[right]
            array[right] = temp
            left++
            right--
        }
    }
    return left
}

const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
console.log(quickSort(array))