class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashTable = {};
        for(let i=0;i<nums.length;i++){
            if(!hashTable[nums[i]]){
                hashTable[nums[i]]=true;
            }else{
                return true;
            }
        }
        return false;
    }
}
