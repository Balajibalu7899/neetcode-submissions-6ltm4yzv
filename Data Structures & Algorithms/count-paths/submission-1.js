class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        //m is rows, n is columns:
        let hashmap = new Map();
        function dfs(r , c){
            if(r===m-1 && c===n-1){
             return 1;
            }
            if(r<0 || r >= m || c<0 || c > n){
                return 0;
            }
            let key = `${r},${c}`;
            if(hashmap.has(key)) return hashmap.get(key);
            let down = dfs(r+1,c);
            let right = dfs(r,c+1);
            let res = down + right;
            hashmap.set(key,res);
            return res;
        }
        return dfs(0,0);
    }
}
