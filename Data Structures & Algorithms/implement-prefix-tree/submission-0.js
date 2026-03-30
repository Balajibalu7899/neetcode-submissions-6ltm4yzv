class Node{
    constructor(){
      this.hashMap = new Map();
      this.worD = false;
    }
}
class PrefixTree {
    constructor() {
      this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let currentmap = this.root;
        for(let char of word){
            if(!currentmap.hashMap.has(char)){
                currentmap.hashMap.set(char, new Node());
            }
            currentmap = currentmap.hashMap.get(char);
        }
        currentmap.worD = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let current = this.root;
        for(let char of word){
            if(!current.hashMap.has(char)){
                return false;
            }
            current = current.hashMap.get(char);
        }
        return current.worD;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current = this.root;
        for(let char of prefix){
            if(!current.hashMap.has(char)) return false;
            current = current.hashMap.get(char);
        }
        return true;
    }
}
