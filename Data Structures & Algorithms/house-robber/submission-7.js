class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length===0) return 0;
        if(nums.length===1) return nums[0];
      const dp = new Array(nums.length);
      dp[0] = nums[0];
      dp[1] = Math.max(dp[0], nums[1]);
      let i=2;
      while(i<nums.length){
        dp[i] = Math.max(nums[i]+dp[i-2], dp[i-1]);
        i++;
      }
      console.log(dp);
      return dp[dp.length-1];
    }
}