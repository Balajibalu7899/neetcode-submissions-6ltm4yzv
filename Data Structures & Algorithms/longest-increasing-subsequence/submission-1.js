class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        function dfs(i,j){
            if(i===nums.length) return 0;
            let res = 0;
            if(j===-1 || nums[i] > nums[j]){
                let without = 0 + dfs(i+1,j);
                let withinclude = 1 + dfs(i+1,i);
                res = Math.max(without, withinclude);
            }else {
                res = dfs(i+1, j);
            }
            return res;
        }
     return  dfs(0,-1);
    }
}
