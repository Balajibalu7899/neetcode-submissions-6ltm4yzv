class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let arr = Array.from(new Set(nums)).sort((a,b)=>a-b);
        for(let i=0;i<arr.length;i++){
            nums[i] = arr[i];
        }
        return arr.length;
    }
}
