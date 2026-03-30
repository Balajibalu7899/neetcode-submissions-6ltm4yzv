class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
       let result = [];
       function backtrack(i,curr, currsum){
         if(i===nums.length){
            return;
         }
         if(currsum===target){
            result.push([...curr]);
            return;
         }
         if(currsum > target){
            return;
         }
         //include
         curr.push(nums[i]);
         currsum+=nums[i];
         backtrack(i,curr,currsum);
         //exclude
         curr.pop();
         currsum-=nums[i];
         backtrack(i+1,curr,currsum);
       }
       backtrack(0,[],0);
       return result;
    }
}


