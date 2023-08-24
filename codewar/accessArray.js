
function printItem(arr, index = 0){
    if(index === arr.length){
        return;
    }

    console.log(arr[index])
    printItem(arr, index + 1)
}

const arr = [1, 3, 4, 5, 6]

printItem(arr)