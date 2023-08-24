/*
1. Identify the base case
2. Identify the recursive case
3. get closer and closer and return when needed. 
Usually you have 2 return, one for the base case 
and the other one for recursive case

*/
function findFactorialRecursivily(n){
    if(n === 2){
        return 2
    }
    return n * findFactorialRecursivily(n - 1)
}

function findFactorialIteratively(n){
    let current = 1
    for(let i = 1; i <= n; i++){
        current = current * i
    }
    return current
}


console.log(findFactorialRecursivily(5))
// console.log(findFactorialIteratively(5))