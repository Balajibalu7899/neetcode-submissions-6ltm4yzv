class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
     if(nums.length===0) return 0;
     if(nums.length===1) return nums[0];
      let arr1 = [...nums];
      arr1.pop();
      let arr2 = [...nums];
      arr2.shift();
      function dfs(i,arr,memo){
        if(i>=nums.length-1){
            return 0;
        }
        if(memo[i]!==-1) return memo[i];
        return (memo[i] = Math.max(arr[i]+dfs(i+2,arr,memo), dfs(i+1,arr,memo)));
      }
      return Math.max(dfs(0,arr1,new Array(nums.length).fill(-1)),dfs(0,arr2,new Array(nums.length).fill(-1)));
    }
}
