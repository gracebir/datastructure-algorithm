class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new TreeNode(value)
        if (!this.root) {
            this.root = newNode
        } else {
            let currentRoot = this.root
            while(true){
                if(value < currentRoot.value){
                    // Left
                   if(!currentRoot.left){
                    currentRoot.left = newNode
                    return this 
                   }
                   currentRoot = currentRoot.left
                } else {
                    // Right 
                    if(!currentRoot.right){
                        currentRoot.right = newNode
                        return this 
                    }
                    currentRoot = currentRoot.right
                }
            }
        }
    }

    lookup(value) {
        if(!this.root){
            return false
        }
        let currentRoot = this.root
        while(currentRoot){
            if(value < currentRoot.value){
                currentRoot = currentRoot.left
            } else if(value > currentRoot.value){
                currentRoot = currentRoot.right
            } else if(value === currentRoot.value){
                return currentRoot
            }
        }
        return false
     }

    traversalPreOrder() {
        traverselPreOrderHelper(this.root)
        function traverselPreOrderHelper(node) {
            if (!node) {
                return;
            }
            console.log(node.value)
            traverselPreOrderHelper(node.left)
            traverselPreOrderHelper(node.right)
        }
    }

    traversalInOrder(){
        traversalInOrderHelper(this.root)
        function traversalInOrderHelper(node){
            if(!node){
                return;
            } else {
                traversalInOrderHelper(node.left)
                console.log(node.value)
                traversalInOrderHelper(node.right)
            }
        }
    }

    traversalPostOrder(){
        traversalPostOrderHelper(this.root)
        function traversalPostOrderHelper(node){
            if(node.left) traversalPostOrderHelper(node.left)
            if(node.right) traversalPostOrderHelper(node.right)
            console.log(node.value)
        }
    }

    traversalLevelOrder(){
        // breadth first search
        let root = this.root
        let queue = []
        if(!root){
            return;
        }
        queue.push(root)
        while(queue.length){
            let temp = queue.shift()
            console.log(temp.value)
            if(temp.left) queue.push(temp.left)
            if(temp.right) queue.push(temp.right)
        }
    }


    delete(value){
        return deleteRecursily(this.root, value)

        function deleteRecursily(root, value){
            if(!root){
                return null
            } else if(value < root.value){
                root.left = deleteRecursily(root.left, value)
            } else if(value > root.value){
                root.right = deleteRecursily(root.right, value)
            } else {
                // no child
                if(!root.left && !root.right){
                    return null
                } else if(!root.right){
                    root = root.right
                    return root
                } else if(!root.left){
                    root = root.left
                    return root
                } else {
                    let temp = findMin(root.right)
                    root.value = temp.value
                    root.right = deleteRecursily(root.right, temp.value)
                }
            }
        }

        function findMin(root){
            while(root.left){
                root = root.left
            }
            return root
        }
    }

    remove(value){
        if(!this.root){
            return false
        }
        let currentNode = this.root
        let parentNode = null
        while(currentNode){
            if(value < currentNode.value){
                parentNode = currentNode
                currentNode = currentNode.left
            } else if(value > currentNode.value){
                parentNode = currentNode
                currentNode = currentNode.right
            } else if(currentNode.right === null){
                if(parentNode === null){
                    this.root = currentNode.left
                } else {
                    if(currentNode.value < parentNode.value){
                        parentNode.left = currentNode.left
                    } else if(currentNode.value > parentNode.value){
                        parentNode.right = currentNode.left
                    }
                }
            } else if(currentNode.left === null){
                if(parentNode === null){
                    this.root = currentNode.left
                } else {
                    currentNode.right.left = currentNode.left

                    if(currentNode.value < parentNode.value){
                        parentNode.left = currentNode.right
                    } else if (currentNode.value > parentNode.value){
                        parentNode.right = currentNode.right
                    }
                } 
            } else {
                let leftmost = currentNode.right.left
                let leftmostParent = currentNode.right
                while(leftmost.left !== null){
                    leftmostParent = leftmost
                    leftmost = leftmost.left
                }

                // Parent's left subtre os leftmost's right subtree
                leftmostParent.left = leftmost.right
                leftmost.left = currentNode.left
                leftmost.right = currentNode.right
                if(parentNode === null){
                    this.root = leftmost
                } else {
                    if(currentNode.value < parentNode.value){
                        parentNode.left = leftmost
                    } else if(currentNode.value > parentNode.value){
                        parentNode.right = leftmost
                    }
                }
            }
        }
        return true
    }
}

const binaryTree = new BinaryTree()

binaryTree.insert(42)
binaryTree.insert(41)
binaryTree.insert(40)
binaryTree.insert(50)
binaryTree.insert(45)
binaryTree.insert(10)
binaryTree.insert(75)

binaryTree.traversalLevelOrder()