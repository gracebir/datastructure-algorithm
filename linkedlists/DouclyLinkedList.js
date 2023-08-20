class DouclyLinkedList {
    constructor(value){
        this.node = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.node
        this.length = 1
    }

    append(value){
        let newNode = {
            value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    preppend(value){
        const newNode = {
            value,
            next: null,
            prev: null
        }
        newNode.next = this.node
        this.node.prev = newNode
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
            next: null,
            prev: null
        }

        const leader = this.traverseToIndex(index - 1)
        const follower = leader.next
        leader.next = newNode
        newNode.prev = leader
        newNode.next = follower
        follower.prev = newNode
        this.length++
        return this.printList()
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
        leader.prev = unwantedNode.prev
        this.length--
        return this.printList()

    }
}



const myLinkedList = new DouclyLinkedList(10)
myLinkedList.append(16)
myLinkedList.append(5)
myLinkedList.append(7)
myLinkedList.preppend(99)
myLinkedList.insert(1,11)
console.log(myLinkedList.printList())
myLinkedList.remove(1)
console.log(myLinkedList.printList())
