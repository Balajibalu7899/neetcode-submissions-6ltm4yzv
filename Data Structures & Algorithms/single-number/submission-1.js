class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let val = nums[0];
        for(let i=1;i<nums.length;i++){
            val ^=nums[i];
        }
        return val;
    }
}
