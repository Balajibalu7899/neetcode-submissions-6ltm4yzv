class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let res = 0;
        for(let num of nums){
            if(count===0) res = num;
            if(num===res){
                count++;
            }else{
                count--;
            }
            
        }
        return res;
    }
}
