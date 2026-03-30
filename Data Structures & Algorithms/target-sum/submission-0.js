class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
       function dfs(i,cursum){
        if(i>=nums.length && cursum===target){
            return 1;
        }
        if(i>=nums.length && cursum!==target){
            return 0;
        }
        //assigning +ve
        let p = nums[i];
        let positive = dfs(i+1,cursum + p);
        let n = -nums[i];
        let negative = dfs(i+1, cursum+n);
        return positive + negative;
       }
      return dfs(0,0);
    }
}
