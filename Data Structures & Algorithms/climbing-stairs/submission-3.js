class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
     if(n<=2){
      return n;
     }
     let arr = new Array(n);
     arr[0] = 0;
     arr[1] = 1;
     arr[2] = 2;
     let i=3;
     while(i<=n){
       arr[i] = arr[i-1] + arr[i-2];
       i++;
     }
     return arr[n];
    }
}
