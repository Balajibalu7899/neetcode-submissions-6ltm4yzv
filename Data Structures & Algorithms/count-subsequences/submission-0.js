class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
      /*
      return DistintSubSequences of s equals to T
      Recursively iterate through indexes i, j for s and t:
      at each step:
       if s[i]===t[j]
         //skip in the current path
         //include  in current path
      if(index j goes out of bound we return 1)
      if(i goes out. of bound we return 0)
      finally return sum of both paths

       */
      let dp = Array.from({length:s.length},()=>Array(t.length).fill(-1));
      function dfs(i,j){
        if(j>=t.length) return 1;
        if(i>=s.length) return 0;
        let include = 0;
        let exclude = 0;
        if(dp[i][j]!==-1) return dp[i][j];
        if(s[i]===t[j]){
          include = dfs(i+1,j+1) + dfs(i+1,j);
        }else{
          exclude = dfs(i+1,j)
        }
        dp[i][j] = include + exclude;
        return include + exclude;
      }
     return dfs(0,0);
    }
}
