class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        let adjlist = {};
        for(let [src, dest] of tickets){
            if(!adjlist.hasOwnProperty(src)){
              adjlist[src] = [];
            }
            if(!adjlist.hasOwnProperty(dest)){
               adjlist[dest] = [];
            }
            adjlist[src].push(dest);
        }
        for(let neighbors of Object.values(adjlist)){
            neighbors.sort();
        }
        let result = ["JFK"];
        function dfs(node){
          if(result.length === tickets.length + 1){
             return true;
          }
          let neighbors = adjlist[node];
          for(let i = 0; i < neighbors.length; i++){
            let neighbor = neighbors[i];
            neighbors.splice(i, 1);
            result.push(neighbor);
             if(dfs(neighbor)){
               return true;
             }else{
                result.pop();
                neighbors.splice(i,0,neighbor);
                
             }
          }
          return false;
          }
           dfs("JFK");
        return result;
        }
       
    }

