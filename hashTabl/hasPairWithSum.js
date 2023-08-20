function hasPairWithSum(arr, sum){
    let mySet = new Set()
    let N = arr.length;
    for(let i = 0; i < N; i++){
        if(mySet.has(arr[i])){
            return true
        }
        mySet.add(sum - arr[i])
    }
    return false
}

const hasPairWithSum1 = (arr, sum) => {
    let len = arr.length
    for(let i = 0; i < len; i++){
        for(let j = 1; j < len - 1; j++){
            if((arr[i] + arr[j])===sum){
                return true
            }
        }
    }
    return false
}

console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 12))

console.log(hasPairWithSum1([6, 4, 3, 2, 1, 7], 9))

