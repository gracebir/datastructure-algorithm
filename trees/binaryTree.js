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
            while (true) {
                if (value < currentRoot.value) {
                    // Left
                    if (!currentRoot.left) {
                        currentRoot.left = newNode
                        return this
                    }
                    currentRoot = currentRoot.left
                } else {
                    // Right 
                    if (!currentRoot.right) {
                        currentRoot.right = newNode
                        return this
                    }
                    currentRoot = currentRoot.right
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false
        }
        let currentRoot = this.root
        while (currentRoot) {
            if (value < currentRoot.value) {
                currentRoot = currentRoot.left
            } else if (value > currentRoot.value) {
                currentRoot = currentRoot.right
            } else if (value === currentRoot.value) {
                return currentRoot
            }
        }
        return false
    }

    delete(value) {
        return deleteRecursily(this.root, value)

        function deleteRecursily(root, value) {
            if (!root) {
                return null
            } else if (value < root.value) {
                root.left = deleteRecursily(root.left, value)
            } else if (value > root.value) {
                root.right = deleteRecursily(root.right, value)
            } else {
                // no child
                if (!root.left && !root.right) {
                    return null
                } else if (!root.right) {
                    root = root.right
                    return root
                } else if (!root.left) {
                    root = root.left
                    return root
                } else {
                    let temp = findMin(root.right)
                    root.value = temp.value
                    root.right = deleteRecursily(root.right, temp.value)
                }
            }
        }

        function findMin(root) {
            while (root.left) {
                root = root.left
            }
            return root
        }
    }

    remove(value) {
        if (!this.root) {
            return false
        }
        let currentNode = this.root
        let parentNode = null
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.right
            } else if (currentNode.right === null) {
                if (parentNode === null) {
                    this.root = currentNode.left
                } else {
                    if (currentNode.value < parentNode.value) {
                        parentNode.left = currentNode.left
                    } else if (currentNode.value > parentNode.value) {
                        parentNode.right = currentNode.left
                    }
                }
            } else if (currentNode.left === null) {
                if (parentNode === null) {
                    this.root = currentNode.left
                } else {
                    currentNode.right.left = currentNode.left

                    if (currentNode.value < parentNode.value) {
                        parentNode.left = currentNode.right
                    } else if (currentNode.value > parentNode.value) {
                        parentNode.right = currentNode.right
                    }
                }
            } else {
                let leftmost = currentNode.right.left
                let leftmostParent = currentNode.right
                while (leftmost.left !== null) {
                    leftmostParent = leftmost
                    leftmost = leftmost.left
                }

                // Parent's left subtre os leftmost's right subtree
                leftmostParent.left = leftmost.right
                leftmost.left = currentNode.left
                leftmost.right = currentNode.right
                if (parentNode === null) {
                    this.root = leftmost
                } else {
                    if (currentNode.value < parentNode.value) {
                        parentNode.left = leftmost
                    } else if (currentNode.value > parentNode.value) {
                        parentNode.right = leftmost
                    }
                }
            }
        }
        return true
    }

    // traversalLevelOrder
    breadthFirstSearch() {
        let currentNode = this.root,
            result = [], queue = []
        queue.push(currentNode)
        while (queue.length > 0) {
            currentNode = queue.shift()
            result.push(currentNode.value)
            if (currentNode.left) {
                queue.push(currentNode.left)
            }

            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return result
    }

    // traversalLevelOrder
    breadthFirstSearchRecurive(result = [], queue = [this.root]) {
        if (queue.length === 0) {
            return result
        }
        let currentNode = queue.shift()
        result.push(currentNode.value)
        if (currentNode.left) return this.breadthFirstSearch(result, queue.push(currentNode.left))
        if (currentNode.right) return this.breadthFirstSearch(result, queue.push(currentNode.right))
    }

    dpsInOrder(node = this.root, result = []) {
        if (node.left) this.dpsInOrder(node.left, result)
        result.push(node.value)
        if (node.right) this.dpsInOrder(node.right, result)
        return result
    }

    dpsPreOrder(node = this.root, result = []) {
        result.push(node.value)
        if (node.left) this.dpsPreOrder(node.left, result)
        if (node.right) this.dpsPreOrder(node.right, result)
        return result
    }

    dpsPostOrder(node = this.root, result = []) {
        if (node.left) this.dpsPostOrder(node.left, result)
        if (node.right) this.dpsPostOrder(node.right, result)
        result.push(node.value)
        return result
    }
}

const binaryTree = new BinaryTree()

// binaryTree.insert(42)
// binaryTree.insert(41)
// binaryTree.insert(40)
// binaryTree.insert(50)
// binaryTree.insert(45)
// binaryTree.insert(10)
// binaryTree.insert(75)

binaryTree.insert(9)
binaryTree.insert(4)
binaryTree.insert(6)
binaryTree.insert(1)
binaryTree.insert(20)
binaryTree.insert(15)
binaryTree.insert(175)


console.log(binaryTree.dpsInOrder())
console.log(binaryTree.dpsPreOrder())
console.log(binaryTree.dpsPostOrder())