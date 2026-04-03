class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let nopaths = 0;
        let l = 0;
        let r = 0;
        while(r < nums.length - 1){
            let maxjump = 0;
            for(let i=l;i<=r;i++){
                maxjump = Math.max(maxjump, i + nums[i]);
            }
            l = r + 1;
            r = maxjump;
            nopaths++;
        }
        return nopaths;
    }
}
