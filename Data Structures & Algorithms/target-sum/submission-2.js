class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let cache = new Map();
       function dfs(i,cursum){
        if(i>=nums.length && cursum===target){
            return 1;
        }
        if(i>=nums.length && cursum!==target){
            return 0;
        }
        let key = `${i},${cursum}`;
        if(cache.has(key)) return cache.get(key);
        //assigning +ve
        let res = dfs(i+1,cursum + nums[i]) + dfs(i+1, cursum-nums[i]);
        cache.set(key, res);
        return res;
       }
      return dfs(0,0);
    }
}
