class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
       if(!grid) return 0;
       let visited = new Set();
       let ROWS = grid.length;
       let COLM = grid[0].length;
       let count = 0;
       function dfs(r, c){
        let key = `${r},${c}`
          if(r < 0 || r >= ROWS || c <0 || c >= COLM || visited.has(key) || grid[r][c]==='0'){
             return;
          }
          visited.add(key);
          grid[r][c] = '0';
          let neighbors = [[1,0],[-1,0],[0,1],[0,-1]];
          for(let [dr , dc] of neighbors){
            let nr = r + dr;
            let nc = c + dc;
            if(!visited.has(`${nr},${nc}`)){
                dfs(nr , nc);
            }
          }
       } 
       for(let r=0;r<ROWS ; r++){
         for(let c=0;c<COLM;c++){
            if(grid[r][c]==='1'){
                dfs(r,c);
                count=count + 1;
            }
         }
       }
       console.log("count:",count);
       return count;
    }
}
