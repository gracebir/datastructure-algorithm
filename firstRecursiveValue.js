// Google question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

//Given an array = [2,3,4,5]
//It should return undefined

function firstRecursive(arr){
    let keeper = []
   for(let i = 0; i < arr.length; i++){
    if(keeper.includes(arr[i])){
        return arr[i]
    } else {
        keeper.push(arr[i])
    }
   }
   return undefined
}

function firstRecursive1(arr){
   const map = {}
   for(let i = 0; i < arr.length; i++){
    if(map[arr[i]]!==undefined){
        return arr[i]
    } else {
        map[arr[i]] = i
    }
   }
   return undefined
}

let array = [2,5,1,2,3,5,1,2,4]
let array2 = [2,1,1,2,3,5,1,2,4]


// console.log(firstRecursive(array))
// console.log(firstRecursive(array2))
// console.log(firstRecursive([2,3,4,5]))

console.log(firstRecursive1(array))
console.log(firstRecursive1(array2))
console.log(firstRecursive1([2,3,4,5]))


