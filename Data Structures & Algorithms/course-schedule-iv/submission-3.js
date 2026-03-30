class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        if(prerequisites.length ===0){
         return new Array(queries.length).fill(false)
        }
        let adjlist = new Map();
        for(let i=0;i<numCourses; i++){
            adjlist.set(i, []);
        }
        for(let [src, dest] of prerequisites){
            adjlist.get(src).push(dest);
        }
        let visited = new Set();
        let prereq = new Map();
        for(let i=0;i<numCourses; i++){
            prereq.set(i, new Set());
        }
        function dfs(src){
            if(visited.has(src)){
                return prereq.get(src);
            }
            visited.add(src);
            for(let neighbor of adjlist.get(src)){
               prereq.get(src).add(neighbor);
               let neighborset = dfs(neighbor);
               for(let pre of neighborset){
                   prereq.get(src).add(pre);
               }
            }
            return prereq.get(src);
        }
        //call dfs on each vertex:
        for(let i=0;i<numCourses; i++){
          dfs(i);
        }
        let res = [];
        for(let [dest, src] of queries){
                res.push(prereq.get(dest).has(src));
        }
        return res;
        
    }
}
