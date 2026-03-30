class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
      let n = cost.length;
      cost[n] = 0;
      let i = n-2;
      while(i>=0){
        cost[i] = cost[i] + Math.min(cost[i+1], cost[i+2]);
        i--;
      }
      return Math.min(cost[0],cost[1]);
    }
}
