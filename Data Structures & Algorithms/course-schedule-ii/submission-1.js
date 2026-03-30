class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {

        let adjlist = new Map();
        for(let i=0;i<numCourses;i++){
            adjlist.set(i,new Array());
        }
        for(let [src,dest] of prerequisites){
            adjlist.get(src).push(dest);
        }
        let output = [];
        let visited = new Set();
        let cycle = new Set();
        function dfs(crs){
           if(cycle.has(crs)){
              return false;
           }
           if(visited.has(crs)){
            return true;
           }
           cycle.add(crs);
           for(let dep of adjlist.get(crs)){
              if(dfs(dep)===false){
                 return false;
              }
           }
           cycle.delete(crs);
           visited.add(crs);
           output.push(crs);
           return true;
        }
        for(let course of adjlist.keys()){
            if(dfs(course)===false){
               return [];
            }
        }
        return output;
    }
}
