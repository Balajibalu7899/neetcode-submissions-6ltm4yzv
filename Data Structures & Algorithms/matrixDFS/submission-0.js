class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        let ROWS = grid.length;
        let COLM = grid[0].length;
        let visited = new Set();
        let count = 0;
        function dfs(r, c){
          let key = `${r},${c}`;
          if(r<0 || r>=ROWS || c<0 || c>=COLM || visited.has(key)||grid[r][c]===1){
            return;
          }
          if(r===ROWS-1 && c===COLM-1){
             count+=1;
          }
          visited.add(key);
          let directions = [[1,0],[-1,0],[0,1],[0,-1]];
          for(let [dr, dc] of directions){
             let nr = dr + r;
             let nc = dc + c;
             if(!visited.has(`${nr},${nc}`)){
                 dfs(nr, nc);
             }
          }
          visited.delete(key);
        }
        dfs(0,0);
        return count;
    }
}
