class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        //m is rows, n is columns:
        let sum = 0;
        function dfs(r , c){
            if(r<0 || r >= m || c<0 || c > n){
                return;
            }
            if(r===m-1 && c===n-1){
                sum = sum + 1;
                return;
            }
            dfs(r+1,c);
            dfs(r,c+1);
        }
        dfs(0,0);
        return sum;
    }
}
