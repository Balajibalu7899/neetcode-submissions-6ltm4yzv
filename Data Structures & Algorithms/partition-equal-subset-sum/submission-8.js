class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let sum = nums.reduce((prev,ele)=>prev+=ele);
        if(sum % 2!==0) return false;
        let target = sum / 2;
        let dp = Array(target + 1).fill(false);
        dp[0] = true;
        for(let num of nums){
            for(let s=target; s>=num; s--){
                dp[s] = dp[s] || dp[s - num];
            }
        }
        console.log(dp);
        return dp[target];
    }
}
