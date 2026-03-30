class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
       let memo = new Array(s.length+1).fill(-1);
       function dfs(i){
         if(memo[i]!==-1){
            return memo[i];
         }
         if(i>=s.length){
            return 1;
         }
         if(s[i]==='0'){
            return 0;
         }
         let res = dfs(i+1);
         const twoDigit = parseInt(s.substring(i, i + 2));
if (twoDigit >= 10 && twoDigit <= 26) {
    res += dfs(i + 2);
}
         memo[i] = res;
         return res;
       }
       return dfs(0);
    }
}
