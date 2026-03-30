class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let target  = nums.reduce((prev,a)=>prev+=a);
        if(target % 2!==0) return false;
         let dp = Array(nums.length).fill(false);
         dp[0] = true;
        for(let num of nums){
            for(let s=target/2; s>=num;s--){
              dp[s] = dp[s] || dp[s-num];
            }
        }
        return dp[target/2];
    }
}
