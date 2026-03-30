class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let L=0, sum=nums[0],R=0;
        let length = nums.length + 1;
        while(R < nums.length){
            if(sum >= target){
                length = Math.min(length,R-L+1);
                sum -= nums[L];
                L++;
            }else{
            R++;
            sum+=nums[R];
            }
        }
        return length < nums.length + 1 ? length : 0;
    }
}
