class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let paths = [];
        let sum = 0;
        function dfs(arr, paths, currentpath, index, target,sum){
                if(sum===target){
                  paths.push([...currentpath])
                  return;
                }
                if(sum>target){
                 return;
                }
                if(index===arr.length){
                  return;
                }
                currentpath.push(arr[index]);
                sum+=arr[index];
                dfs(arr, paths,currentpath,index,target,sum);
                sum -= currentpath.pop();
                dfs(arr,paths, currentpath,index+1,target,sum);
           }  
       dfs(nums, paths, [], 0, target, sum);
       return paths;
    }
}


