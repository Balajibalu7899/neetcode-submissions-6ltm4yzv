class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let ar = nums.filter((a)=>a!==val);
        for(let i=0;i<ar.length;i++){
            nums[i] = ar[i];
        }
        return ar.length;
    }
}
