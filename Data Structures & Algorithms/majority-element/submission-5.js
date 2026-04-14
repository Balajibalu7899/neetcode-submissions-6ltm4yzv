class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        //naive approach 
      let count = 1;
      let n = nums.length;
      nums.sort((a,b)=>a - b);
      if(n===1) return nums[0];
      for(let i=1;i<nums.length;i++){
        if(nums[i]===nums[i-1]){
            count++;
        }else{
            count=1;
        }
         if(count > n/2){
            return nums[i-1];
         }
      }
    }
}
