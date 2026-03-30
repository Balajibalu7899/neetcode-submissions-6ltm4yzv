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
            while(adjlist.has(src) && adjlist.get(src).length > 0){
                  let dest = adjlist.get(src).pop();
                  dfs(dest);
            }
            result.push(src);
        }
        dfs('JFK');
        return result.reverse();
    }
}
