class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        let R = grid.length;
        let C = grid[0].length;
        let cache = Array.from({length:R},()=>Array(C).fill(-1));
        function dfs(r,c){
            if(r<0 || r>=R || c<0 || c>=C || grid[r][c]===1){
                return 0;
            }
            if(r===R-1 && c===C-1){
                return 1;
            }
            if(cache[r][c]!==-1) return cache[r][c];
            cache[r][c] = dfs(r+1,c) + dfs(r,c+1);
            return cache[r][c];
        }
        return dfs(0,0);
    }
}
