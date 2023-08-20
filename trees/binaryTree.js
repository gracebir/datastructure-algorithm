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

    traverselPreOrder() {
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

console.log(binaryTree.lookup(20))

// binaryTree.traverselPreOrder()

// function traverse(root){
//     const tree = { value: root.value};
//     tree.left = root.left === null ? null : traverse(root.left)
//     tree.right = root.right = null ? null : traverse(root.right)
//     return tree
// }