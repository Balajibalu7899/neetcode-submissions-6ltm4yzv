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
        let window = new Array();
        while(right < nums.length){
           window.push(nums[right]);
            if(window.length === k){
                console.log(window);
                arr.push(Math.max(...window));
                window.shift();
                left++;
            }
            right++;
        }
        return arr;
    }
}
