class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let L1 = text1.length;
        let L2 = text2.length;
        let dp = Array.from({length: L1 + 1}, ()=>Array(L2+1).fill(0));
        for(let i=0;i<L1;i++){
            for(let j=0;j<L2;j++){
                if(text1[i]===text2[j]){
                    dp[i+1][j+1] = 1 + dp[i][j];
                }else{
                    dp[i+1][j+1] = Math.max(dp[i][j+1], dp[i+1][j]);
                }
            }
        }
        return dp[L1][L2];
        // function dfs(i,j){
        //   if(i >= L1 || j >= L2){
        //      return 0;
        //   }
          
        //   if(memory[i][j]!==-1) return memory[i][j];
        //   let res = 0;
        //   if(text1[i]===text2[j]){
        //      res += 1 + dfs(i+1,j+1);
        //   }else{
        //     res = Math.max(dfs(i+1, j) , dfs(i, j+1));
        //   }
        //   memory[i][j] = res;
        //   return res;
        // }
        // return dfs(0,0);
    }
}
