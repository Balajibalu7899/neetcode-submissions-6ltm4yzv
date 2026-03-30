class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
       
    let window = new Set(); 

    for (let R = 0; R < nums.length; R++) {
        if (R  > k) {
            window.delete(nums[R-k-1]);
        }
        if (window.has(nums[R])) {
            return true;
        }
        window.add(nums[R]);
    }
    return false;

    }
}
