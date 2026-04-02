class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let n = nums.length;
        let current = n - 2;
        let goal = n - 1;
        while(current>=0){
            if(current + nums[current]>=goal){
                goal = current;
            }
            current--;
        }
       return goal===0 ? true:false;
    }
}
