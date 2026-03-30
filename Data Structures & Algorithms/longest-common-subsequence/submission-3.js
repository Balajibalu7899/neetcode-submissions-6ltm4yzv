class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let L1 = text1.length;
        let L2 = text2.length;
        let memory = Array.from({length: text1.length}, ()=>Array(text2.length).fill(-1));
        function dfs(i,j){
          if(i >= L1 || j >= L2){
             return 0;
          }
          
          if(memory[i][j]!==-1) return memory[i][j];
          let res = 0;
          if(text1[i]===text2[j]){
             memory[i][j] = 1 + dfs(i+1,j+1);
          }else{
            memory[i][j] = Math.max(dfs(i+1, j) , dfs(i, j+1));
          }
          return memory[i][j]
        }
        return dfs(0,0);
    }
}
