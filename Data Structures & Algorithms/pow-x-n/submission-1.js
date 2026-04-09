class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
      let k = Math.abs(n);
      function dfs(x, n){
        if(x===0) return 0;
        if(n===0) return 1;
        let res = dfs(x * x , Math.floor(n/2));
        return (n % 2 !==0) ? res * x : res;
      }
      let result = dfs(x, k);
      return n < 0  ? ( 1 / result) : result;
    }
}
