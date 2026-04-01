class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
      /**
       * Input: Given 2 Strings contain lowercase letters
       * Allowed actions on word1 on unlimited times:
       * 1. Insert a character at any position
       * 2. Delete a char at any position
       * 3. Replace ----||------
       * Output: Minimum number of operations took to make word1 to word2
       * START recurssion with i,j
       * if i ===word1.length 
       *   return number of characters in word2(it means we have to insert that many remaining characeters)
       * if j===wor2.length
       *   return number of remaining characters in the word1(it means we need to delete those many)
       * if char i mathes char j 
       *   increment i+1, j+1
       * else 
       *  insert char at i and increment just j (i,j+1)
       *  delete chat at i (i+1, j)
       * replace it (i+1, j+1)
       * Math.min of these three operations
       * 
       */
      let N = word1.length;
      let M = word2.length;
      let memo = Array.from({length: N},()=>Array(M).fill(-1));
      function dfs(i,j){
        if(i>=word1.length){
           return M-j;
        }
        if(j>=word2.length){
          return N-i;
        }
        if(memo[i][j]!==-1) return memo[i][j];
        if(word1[i]===word2[j]){
          return dfs(i+1,j+1);
        }else{
          let res = Math.min(1 + dfs(i,j+1),  1 + dfs(i+1,j), 1 + dfs(i+1,j+1));
          memo[i][j] = res;
          return res;
        }
      }
      return dfs(0,0);
    }
}
