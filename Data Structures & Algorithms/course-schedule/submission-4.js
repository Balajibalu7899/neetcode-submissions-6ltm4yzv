class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        if(prerequisites.length===0){
            return true;
        }
        let path = new Set();
        let adjacentList = new Map();
        for(let c=0;c<numCourses;c++){
            adjacentList.set(c,[]);
        }
        for(let [src , dest] of prerequisites){
            adjacentList.get(src).push(dest);
        }
        function dfs(node){
            if(path.has(node)){
                return false;
            }
            path.add(node);
            for(let neighbors of adjacentList.get(node)){
                if(dfs(neighbors)===false){
                    return false;
                }
            }
            path.delete(node);
            return true;
        }
        for(let i=0;i<numCourses;i++){
            if(!dfs(i)){
                return false;
            }
        }
        return true;
    }
}
