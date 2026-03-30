class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let memo = new Map();
        function dfs(i,j){
            if(i===nums.length) return 0;
            if(memo.has(`${i},${j}`)) return memo.get(`${i},${j}`);
            let res = 0;
            if(j===-1 || nums[i] > nums[j]){
                let without = 0 + dfs(i+1,j);
                let withinclude = 1 + dfs(i+1,i);
                res = Math.max(without, withinclude);
            }else {
                res = dfs(i+1, j);
            }
            memo.set(`${i},${j}`,res);
            return res;
        }
     return  dfs(0,-1);
    }
}
