class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
       let L=0;
       let sumsofar=0;
       let minlength = nums.length + 1;
       let R=0;
       while(R < nums.length){
        sumsofar += nums[R];
        while(sumsofar >= target){
            minlength = Math.min(minlength, R-L+1);
            sumsofar -= nums[L];
            L++;
        }
          R++;
       }
       return minlength>nums.length ? 0:minlength;
    }
}
