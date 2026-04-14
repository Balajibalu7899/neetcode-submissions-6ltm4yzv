class MyHashSet {
    constructor(size = 7) {
        this.array = new Array(size);
    }
    _hash(key){
        let k = String(key);
        let hash = 0;
        for(let i=0;i<k.length;i++){
          hash = (hash + k.charCodeAt(i) * 23) % this.array.length;
        }
        return hash;
    }
    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
     let index = this._hash(key);
     if(!this.array[index]) this.array[index] = [];
     this.array[index].push([key, key]);
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

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
      let index = this._hash(key);
      if(this.array[index]){
         for(let [k, value] of this.array[index]){
            if(k===key) return true;
         }  
      }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
