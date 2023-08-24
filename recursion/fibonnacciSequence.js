/*
Given a number N return the index value of the Fibonacci 
sequence, where the sequence is:

0,1,1,2,3,5, 8 ,13, 21, ...
the pattern of the is that each value is the sum if the
previous values, thta means that for N=5 -> 2+3
*/


function fibonacciRecursively(n){
   if(n <= 1){
    return n
   } else {
    return fibonacciRecursively(n-1) + fibonacciRecursively(n-2)
   }
}


function fibonacciIteratively(n){
    let arr = [0, 1]
    for(let i = 2; i < n + 1; i++){
        arr.push(arr[i-2] + arr[i - 1])
    }
    return arr[n]
}

// console.log(fibonacciRecursively(4))
console.log(fibonacciIteratively(5))
