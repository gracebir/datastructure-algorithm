/**
 * Sets is a group of unordered unique elements.
*/

const exSet = new Set()
for(let i = 0; i < 5; i++){
    exSet.add(i)
}

exSet.delete(3)

console.log(exSet)