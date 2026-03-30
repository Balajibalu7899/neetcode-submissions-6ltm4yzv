class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let dp = new Array(nums.length).fill(1);
        let max = 1;
        for(let i=0;i<nums.length;i++){
            for(let j=0;j<=i-1;j++){
                if(nums[i] > nums[j]){
                    dp[i] = Math.max(dp[i],1 + dp[j]);
                    max = Math.max(max , dp[i]);
                }
            }
        }
    return max;
    }
}
