class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = new Array(2 * nums.length);
        for(let i=0; i< ans.length;i++){
            let index = Math.floor(i % nums.length);
            ans[i] = nums[index];
        }
        return ans;
    }
}
