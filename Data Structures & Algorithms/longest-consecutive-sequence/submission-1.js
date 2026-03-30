class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       let set = new Set(nums);
       let maxlength = 0;
       for(let num of nums){
        if(!set.has(num-1)){
             let longestarraylength = 0;
         let current = num;
         while(set.has(current)){
            longestarraylength++;
            current++;
         }
         maxlength = Math.max(maxlength,longestarraylength);
        }else{
            continue;
        }
       } 
       return maxlength;
    }
}
