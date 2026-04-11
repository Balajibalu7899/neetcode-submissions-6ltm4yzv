class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let hashset = new Set();
        let max = 0;
        for(let i=0;i<nums.length;i++){
            hashset.add(nums[i]);
            max = Math.max(nums[i], max);
        }
        console.log(hashset);
        for(let i=0;i<=max+1;i++){
            if(!hashset.has(i)) {
                return i;
            };
        }
        return max+1;
    }
}
