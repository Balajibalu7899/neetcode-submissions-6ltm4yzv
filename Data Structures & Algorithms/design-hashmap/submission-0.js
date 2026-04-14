class MyHashMap {
    constructor(size=7) {
        this.array = new Array(size);
    }
    _hash(k){
        let key = String(k);
        let hash = 0;
        for(let i=0;i<key.length;i++){
            hash = ( hash + key.charCodeAt(i) * 23) % this.array.length;
        }
        return hash;
    }
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let index = this._hash(key);
        if(!this.array[index]) this.array[index] = [];
        for(let i=0;i<this.array[index].length;i++){
            if(this.array[index][i][0]===key){
                this.array[index][i][1] = value;
                return;
            }else{
                continue;
            }
        }
        this.array[index].push([key, value]);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let index = this._hash(key);
        console.log(index);
        console.log(this.array[index]);
        if(this.array[index]){
            for(let [hashkey, value] of this.array[index]){
                if(hashkey===key) return parseInt(value);
            }
        }
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let index = this._hash(key);
        if(this.array[index]){
            this.array[index] = this.array[index].filter((ele)=>ele[0]!==key);
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
