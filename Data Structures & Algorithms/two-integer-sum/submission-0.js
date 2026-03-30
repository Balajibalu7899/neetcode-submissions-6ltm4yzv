class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = {};
        for(let i=0;i<nums.length;i++){
          let diffrence = target - nums[i];
          if(diffrence in hashMap){
           return [hashMap[diffrence], i]
          }else{
           hashMap[nums[i]] = i;
          }   
        }
    }
}
