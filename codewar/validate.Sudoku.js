function validateSudoku(arr){
    const N = arr.length
    for(let i = 0; i < N; i ++){
        const rows = []
        const cols = []
        for(let j = 0; j < N; j++){
            if(arr[i][j] < 1 || arr[i][j] > N || rows.includes(arr[i][j])){
                return false
            }
            rows.push(arr[i][j])
            if(arr[j][i] < 1 || arr[j][i] > N || cols.includes(arr[j][i])){
                return false
            }
            cols.push(arr[j][i])
        }
    }
    return true
}


let grid4 = [[1]]

let grid5 = [[-1, -2, -3],
            [-2, -3, -1],
            [-3, -1, -2]]

let grid6 = [[1, 3, 3],
            [3, 1, 2],
            [2, 3, 1]]

let grid1 = [[2, 3, 1],
            [1, 2, 3],
            [3, 1, 2]]
console.log(validateSudoku(grid4)) // True
console.log(validateSudoku(grid5)) // => False
console.log(validateSudoku(grid6)) //=> False
console.log(validateSudoku(grid1)) //=> True

