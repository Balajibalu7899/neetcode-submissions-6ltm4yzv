class Node{
    constructor(){
        this.hashmap = new Map();
        this.end = false;
    }
}
class WordDictionary {
    constructor() {
        this.rootmap = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let currentobj = this.rootmap;
        for(let c of word){
            if(!currentobj.hashmap.has(c)){
                currentobj.hashmap.set(c, new Node());
            }
            currentobj = currentobj.hashmap.get(c);
        }
        currentobj.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.helper(0,this.rootmap,word)
    }
    helper(index,root,word){
        let current = root;
        for(let i = index; i<word.length;i++){
            if(word[i]==="."){
               for(let object of current.hashmap.values()){
                   if(this.helper(i+1,object,word)){
                    return true;
                   }
               }
               return false;
            }else{
                if(!current.hashmap.has(word[i])) return false;
                current = current.hashmap.get(word[i]);
            }
        }
        return current.end;
    }
}
