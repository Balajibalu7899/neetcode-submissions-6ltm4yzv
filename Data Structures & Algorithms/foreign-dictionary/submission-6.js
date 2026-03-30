class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        let adjlist = new Map();
        for(let word of words){
             for(let c of word){
                if(!adjlist.has(c)){
                    adjlist.set(c, []);
                }
             }
        }
        for(let i=0;i<words.length - 1; i++){
            let word1 = words[i];
            let word2 = words[i+1];
            let minlen = Math.min(word1.length, word2.length);
            if(word1.length > word2.length && word1.substring(0,minlen) === word2.substring(0, minlen)){
                return "";
            }
            for(let j=0; j<minlen; j++){
                if(word1[j]!==word2[j]){
                    adjlist.get(word1[j]).push(word2[j]);
                    break;
                }
            }
        }
        let topo = [];
        let cycle = new Set();
        let visited = new Set();
        function dfs(src){
           if(cycle.has(src)){
              return false;
           }
           if(visited.has(src)){
             return true;
           }
           cycle.add(src);
           for(let neighbor of adjlist.get(src)){
              if(dfs(neighbor)===false) return false;
           }
           cycle.delete(src);
           visited.add(src);
           topo.push(src);
           return true;
        }
        for(let key of adjlist.keys()){
            if(dfs(key)===false){
                return "";
            }
        }
        topo.reverse();
        return topo.join("");
    }
}
