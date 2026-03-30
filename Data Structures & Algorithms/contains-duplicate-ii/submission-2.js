class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
       let hashset = new Set();
       let left = 0;
       for(let right=0;right<nums.length;right++){
         if(right - left > k){
            hashset.delete(nums[left]);
            left++;
         }
         if(hashset.has(nums[right])){
            return true;

         }
         hashset.add(nums[right]);
       }
       return false
    }
}
