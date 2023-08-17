/*
You are working on a logic game made up of a series of puzzles. The first type of puzzle you settle on is "sub-Sudoku", a game where the player has to position the numbers 1..N on an NxN matrix.

Your job is to write a function that, given an NxN matrix, returns true if  every row and column contains the numbers 1..N

The UI for the game does not do any validation on the numbers the player enters, so the matrix can contain any signed integer.

grid1 = [[2, 3, 1],
         [1, 2, 3],
         [3, 1, 2]]            -> True

grid2 = [[1, 2, 3],
         [3, 2, 1],
         [3, 1, 2]]            -> False

grid3 = [[2, 2, 3],
         [3, 1, 2],
         [2, 3, 1]]            -> False

grid4 = [[1]]                  -> True

grid5 = [[-1, -2, -3],
         [-2, -3, -1],
         [-3, -1, -2]]         -> False

grid6 = [[1, 3, 3],
         [3, 1, 2],
         [2, 3, 1]]            -> False

grid7 = [[1, 2, 3, 4],
         [4, 3, 2, 1],
         [1, 3, 2, 4],
         [4, 2, 3, 1]]         -> False

grid8 = [[0, 3],
         [3, 0]]               -> False

grid9 = [[0, 1],
         [1, 0]]               -> False

grid10 = [[0, 2],
          [2, 0]]              -> False

grid11 = [[1, 2, 3, 4],
          [2, 3, 1, 4],
          [3, 1, 2, 4],
          [4, 2, 3, 1]]        -> False

grid12 = [[-1, -2, 12, 1],
          [12, -1, 1, -2],
          [-2, 1, -1, 12],
          [1, 12, -2, -1]]     -> False

grid13 = [[2, 3, 3],
          [1, 2, 1],
          [3, 1, 2]]           -> False

grid14 = [[1, 3],              -> False
          [3, 1]]

grid15 = [[2, 3],              -> False
          [3, 2]]

grid16 = [[3, 2],              -> False
          [2, 3]]

validateSudoku(grid1) => True
validateSudoku(grid2) => False
validateSudoku(grid3) => False
validateSudoku(grid4) => True
validateSudoku(grid5) => False
validateSudoku(grid6) => False
validateSudoku(grid7) => False
validateSudoku(grid8) => False
validateSudoku(grid9) => False
validateSudoku(grid10) => False
validateSudoku(grid11) => False
validateSudoku(grid12) => False
validateSudoku(grid13) => False
validateSudoku(grid14) => False
validateSudoku(grid15) => False
validateSudoku(grid16) => False
  
Complexity analysis variables:  
  
N = The number of rows/columns in the matrix  
*/

function validateSudoku(grid) {
    let N = grid.length
    for (let i = 0; i < N; i++) {
        const rows = new Set()
        const cols = new Set()
        for (let j = 0; j < N; j++) {
            if (grid[i][j] < 1 || grid[i][j] > N || rows.has(grid[i][j])) {
                return false
            }
            rows.add(grid[i][j])
            console.log(rows)
            if (grid[j][i] < 1 || grid[j][i] > N || cols.has(grid[j][i])) {
                return false
            }
            cols.add(grid[j][i])
            console.log(cols)
        }
    }
    return true
} // O(n)

grid4 = [[1]]

grid5 = [[-1, -2, -3],
[-2, -3, -1],
[-3, -1, -2]]

grid6 = [[1, 3, 3],
[3, 1, 2],
[2, 3, 1]]

grid1 = [[2, 3, 1],
[1, 2, 3],
[3, 1, 2]]
// console.log(validateSudoku(grid4)) // True
// console.log(validateSudoku(grid5)) // False
// console.log(validateSudoku(grid6)) //=> False
// console.log(validateSudoku(grid1)) //=> True
