class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        //naive approach 
      let hashmap = new Map();
      let n = nums.length;
      for(let i=0;i<n;i++){
        if(!hashmap.has(nums[i])){
            hashmap.set(nums[i], 0);
        }
        let k = hashmap.get(nums[i]);
        hashmap.set(nums[i], k+1);
        if(hashmap.get(nums[i]) > (n/2)) return nums[i];
      }
    }
}
