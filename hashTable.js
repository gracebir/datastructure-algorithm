class HashTable {
    constructor(size){
        this.data = new Array(size)
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set(key, value){
        const address = this._hash(key)
        if(!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key, value])
        return this.data
    }

    get(key){
        const address = this._hash(key)
        const currentBucket = this.data[address]
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0]===key){
                    return currentBucket[i][1]
                }
            }
        } else {
            return undefined
        }
    }

    keys(){
        const keyData = []
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                keyData.push(this.data[i][0][0])
            }
        }
        return keyData
    }

    values(){
        const valueDatas = []
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                valueDatas.push(this.data[i][0][1])
            }
        }
        return valueDatas
    }
}


const hashTable = new HashTable(50)

hashTable.set("grapes", 10000)
hashTable.set("Name", 'grace')
hashTable.set("orange",10)

console.log(hashTable.keys())
console.log(hashTable.values())