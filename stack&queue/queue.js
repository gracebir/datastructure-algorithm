class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    peek(){
        return this.first
    }

    enqueue(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }

    dequeue(){
        if(this.length === 0){
            return null
        }
        if(this.first === this.last){
            this.last = null
        }
        const unWantedValue = this.first
        this.first = this.first.next
        this.length--
        return this
    }

}

const queue = new Queue()
queue.enqueue("Joy")
queue.enqueue("Matt")
queue.enqueue("Pavel")
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue)

// Joy
// Matt
// Pavel
// Samir