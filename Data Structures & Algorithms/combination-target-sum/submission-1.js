class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let paths = [];
        let sum = 0;
        function dfs(currentpath, index, target,sum){
                if(sum===target){
                  paths.push([...currentpath])
                  return;
                }
                if(sum>target){
                 return;
                }
                if(index===nums.length){
                  return;
                }
                currentpath.push(nums[index]);
                sum+=nums[index];
                dfs(currentpath,index,target,sum);
                sum -= currentpath.pop();
                dfs(currentpath,index+1,target,sum);
           }  
       dfs([], 0, target, sum);
       return paths;
    }
}


