class Stack {
    constructor(){
        this.array = []
    }

    pop(){
        this.array.pop()
        return this
    }

    push(value){
        this.data.push(value)
        return this
    }

    peak(){
        return this.array[this.array.length - 1]
    }
}

const stack = new Stack()
stack.push("Discord")
stack.push("Udemi")
stack.push("google")
console.log(stack)