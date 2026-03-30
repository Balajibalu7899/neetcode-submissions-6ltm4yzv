class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        if(!grid) return 0;
        let ROWS = grid.length;
        let COLM = grid[0].length;
        let maxarea = 0;
        let visited = new Set();
        function dfs(r,c){
            if(r<0 || c<0 || r>=ROWS || c>=COLM || grid[r][c]===0 || visited.has(`${r},${c}`)){
                return 0;
            }
            visited.add(`${r},${c}`);
            grid[r][c] = 0;
            let directions = [[1,0],[-1,0],[0,1],[0,-1]];
            let sum = 1;
            for(let [dr , dc] of directions){
                let nr = r + dr;
                let nc = c + dc;
                if(!visited.has(`${nr},${nc}`)){
                    sum += dfs(nr, nc);
                }
            }
            return sum;
        }
        for(let r=0;r<ROWS;r++){
            for(let c=0;c<COLM;c++){
                let val = dfs(r,c);
                maxarea = Math.max(maxarea, val);
            }
        }
       return maxarea;
    }
}
