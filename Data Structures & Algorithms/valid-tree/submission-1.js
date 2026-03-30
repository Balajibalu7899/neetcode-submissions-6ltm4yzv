class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let adjList = new Map();
        for(let i=0; i < n ; i++){
            adjList.set(i, []);
        }
        for(let [src, dest] of edges){
            adjList.get(src).push(dest);
            adjList.get(dest).push(src);
        }
        let visited = new Set();
        function dfs(parent,node){
            if(visited.has(node)){
              return false;   
            }
            visited.add(node);
            for(let neighbor of adjList.get(node)){
                if(neighbor!==parent){
                   if(dfs(node,neighbor)===false){
                    return false;
                }
                }
                
            }
            return true;
        }
        if(dfs(-1,0) && visited.size===n){
            return true;
        }else{
            return false;
        }
    }
}
