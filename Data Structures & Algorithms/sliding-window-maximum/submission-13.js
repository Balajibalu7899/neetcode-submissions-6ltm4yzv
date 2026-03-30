class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let arr = [];
        let left = 0;
        let right = 0;
        let queue = [];
        while(right < nums.length){
            while(queue.length > 0 && nums[right] > nums[queue[queue.length - 1]]){
                queue.pop();
            }
            queue.push(right);
            if(right - left + 1 === k){
                arr.push(nums[queue[0]]);
                if (left ===queue[0]) {
                    queue.shift();
                }
                left++;
            }
            right++;
        }
       return arr;
    }
}
