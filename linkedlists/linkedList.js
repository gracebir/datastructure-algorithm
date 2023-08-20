class LinkedList {
    constructor(value){
        this.node = {
            value: value,
            next: null
        }
        this.tail = this.node
        this.length = 1
    }

    append(value){
        let newNode = {
            value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    preppend(value){
        const newNode = {
            value,
            next: this.node
        }
        this.node = newNode
        this.length++
        return this
    }

    printList(){
        let currentNode = this.node
        let arr = []
        while(currentNode !== null){
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }
        return arr
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value)
        } 

        const newNode = {
            value,
            next: null
        }

        const leader = this.traverseToIndex(index - 1)
        const holdingPointer = leader.next
        leader.next = newNode
        newNode.next = holdingPointer
        this.length++
    }

    traverseToIndex(index){
        let counter = 0
        let currentNode = this.node
        while(counter !== index){
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    remove(index){
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length--
        return this.printList()

    }

    reverse(){
        if(this.length === 1){
            return this.node
        }

        let first = this.node
        this.tail = this.node
        let second = first.next
        while(second){
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }

        this.node.next = null
        this.node = first
        return this
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(16)
myLinkedList.append(5)
myLinkedList.append(4)
myLinkedList.append(14)
myLinkedList.preppend(3)
console.log(myLinkedList.printList())
myLinkedList.reverse()
console.log(myLinkedList.printList())

