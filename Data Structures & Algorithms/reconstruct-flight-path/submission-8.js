class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        let adjlist = new Map();
        let result = [];
        tickets.sort().reverse();
        for(let [src , dest] of tickets){
            if(!adjlist.has(src)){
               adjlist.set(src , []);
            }
            adjlist.get(src).push(dest);
        }
        function dfs(src){
            let neighbors = adjlist.get(src);
            while(neighbors && neighbors.length > 0){
                let dest = neighbors.pop();
                dfs(dest);
            }
            result.push(src);
        }
        dfs('JFK');
        return result.reverse();
    }
}
