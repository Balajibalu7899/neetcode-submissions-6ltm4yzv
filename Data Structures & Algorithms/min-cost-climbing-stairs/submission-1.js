class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
       let i = cost.length-3;
       while(i>=0){
        cost[i] = cost[i] + Math.min(cost[i+1], cost[i+2]);
        i--;
       }
       return Math.min(cost[0], cost[1]);
    }
}
