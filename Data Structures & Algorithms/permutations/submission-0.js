class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
       let result = [];
       let boolarra = new Array(nums.length).fill(false);
       function backtrack(current, index){
          if(current.length===nums.length){
             result.push([...current]);
             return;
          }
          for(let i=0;i<nums.length;i++){
            if(boolarra[i]===true) continue;
             current.push(nums[i]);
             boolarra[i]=true;
             backtrack(current, i);
             current.pop();
             boolarra[i] = false;
          }
       }
       backtrack([],0);
      return result;
       
    }
}
