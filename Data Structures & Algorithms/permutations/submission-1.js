class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
      let result = [];
      let checker = new Array(nums.length).fill(false);
      function backtrack(i,currstate){
        if(i===nums.length){
            return;
        }
        if(currstate.length===nums.length){
            result.push([...currstate]);
            return;
        }
         for(let c=0;c<nums.length;c++){
            if(!checker[c]){
                //include
               currstate.push(nums[c])
               checker[c] = true;
               backtrack(c,currstate);
               //excluide
               checker[c] = false;
               currstate.pop();
            }
         }
      }
      backtrack(0,[]);
      return result;
    }
}
