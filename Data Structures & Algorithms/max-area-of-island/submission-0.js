class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        if(!grid){
            return 0;
        }
        let max = 0;
        let visited = new Set();
        let ROWS = grid.length;
        let COLM = grid[0].length;
        let directions = [[1,0],[-1,0],[0,1],[0,-1]];
        function dfs(r,c,current){
           if(r<0 || r>=ROWS || c<0 || c>=COLM || visited.has(`${r},${c}`) || grid[r][c]===0){
             max = Math.max(max,current.length);
             return;
           }
           current.push([r,c]);
           visited.add(`${r},${c}`)
           for(let [dr,dc] of directions){
             dfs(r+dr,c+dc,current);
           }
        }
        for(let r=0;r<ROWS;r++){
            for(let c=0;c<COLM;c++){
                if(grid[r][c]===1 && !visited.has(`${r},${c}`)){
                    dfs(r,c,[]);
                }
            }
        }
        return max;
    }
}
