class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let L1 = text1.length;
        let L2 = text2.length;
        let memory = new Map();
        function dfs(i,j){
          if(i >= L1 || j >= L2){
             return 0;
          }
          let key = `${i},${j}`;
          if(memory.has(key)) return memory.get(key);
          let res = 0;
          if(text1[i]===text2[j]){
             res += 1 + dfs(i+1,j+1);
          }else{
            res = Math.max(dfs(i+1, j) , dfs(i, j+1));
          }
          memory.set(key, res);
          return res;
        }
        return dfs(0,0);
    }
}
