class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {
        let adjlist = new Map();
        for(let i=0; i<=n-1; i++){
            adjlist.set(i, []);
        }
        for(let [src, dest] of edges){
            adjlist.get(src).push(dest);
        }
        let toposort = [];
        let visited = new Set();
        let cycle = new Set();
        function dfs(node){
            if(cycle.has(node)){
                return false;
            }
         if(visited.has(node)){
            return true;
         }
         cycle.add(node);
         for(let neighbor of adjlist.get(node)){
            if(!dfs(neighbor)){
                return false;
            }
         }

         toposort.push(node);
         visited.add(node);
         cycle.delete(node);
         return true;
        }
        for(let i=0;i<=n-1;i++){
            if(!dfs(i)){
                return [];
            }
        }
        console.log(toposort);
        return toposort.reverse();
    }
}
