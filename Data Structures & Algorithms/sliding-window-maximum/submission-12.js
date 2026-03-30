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
            console.log("\nqueue",queue);
            console.log("array",arr);
            while(queue.length > 0 && nums[right] > nums[queue[queue.length - 1]]){
                queue.pop();
            }
            queue.push(right);
            if(right - left + 1 === k){
                arr.push(nums[queue[0]]);
                console.log("left",left,"right",right)
                console.log(nums[left], nums[queue[0]]);
                if (left ===queue[0]) {
                    queue.shift();
                }
                left++;
            }
            console.log("array",arr);
            right++;
        }
       return arr;
    }
}
