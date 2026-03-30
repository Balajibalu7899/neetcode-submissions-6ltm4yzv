class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
       let n = s.length;
       let memo = new Array(n).fill(-1);
       function dfs(i){
          if(i>=n){
             return 1;
          }
          if(s[i]==='0'){
             return 0;
          }
         if(memo[i]!==-1){
           return memo[i];
         }
        let res = dfs(i+1);
        if(i+1 < n && parseInt(s.substring(i,i+2))<=26){
            res+=dfs(i+2);
        }
        memo[i] = res;
        return res;
       }
       return dfs(0);
    }
}
