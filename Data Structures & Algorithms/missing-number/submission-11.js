class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let res = 0;
        let max = 0;
        for(let i=0;i<nums.length;i++){
            res += nums[i];
        }
        let sum = 0;
        for(let i=0;i<=nums.length;i++){
          sum+=i;
        }
        return Math.abs(sum - res);
    }
}
