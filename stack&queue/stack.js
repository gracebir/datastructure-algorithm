class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }

    pop(){
        if(this.length === 0){
            return this
        }
        if(this.top === this.bottom){
            this.bottom = null
        }
        let unWantedValue = this.top
        const nextValue = unWantedValue.next
        this.top = nextValue
        this.length--
        return unWantedValue.value
    }

    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.top = newNode
            this.bottom = newNode
        } else {
            const prev = this.top
            this.top = newNode
            this.top.next = prev
        }
        this.length++
        return this
    }

    peak(){
        return this.top
    }
}

const stack = new Stack()
stack.push("Discord")
stack.push("Udemi")
stack.push("google")
stack.pop()
stack.pop()
stack.pop()
console.log(stack)