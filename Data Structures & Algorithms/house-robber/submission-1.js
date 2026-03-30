class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
             let r1 = 0;
             let r2 = 0;
             for(let num of nums){
               let temp = Math.max(num + r1, r2);
               r1 = r2;
               r2 = temp;
             }             
             return r2;   
    }
}
