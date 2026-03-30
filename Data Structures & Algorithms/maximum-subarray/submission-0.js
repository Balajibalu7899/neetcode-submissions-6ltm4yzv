class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let currentsum = 0;
        for(let n of nums){
            currentsum = Math.max(currentsum,0);
            currentsum+=n;
            maxSum=Math.max(currentsum, maxSum);
        }
        return maxSum;
    }
}
