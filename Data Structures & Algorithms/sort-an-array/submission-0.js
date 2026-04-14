class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        function quicksort(start, end){
            if(end - start + 1 <=1){
                return;
            }
            let pivot = end;
            let left = start;
            for(let i = start; i<end; i++){
               if(nums[i] <= nums[pivot]){
                 [nums[i], nums[left]] = [nums[left], nums[i]];
                 left++;
               }
            }
          [nums[left], nums[pivot]] = [nums[pivot], nums[left]];
          quicksort(start,left-1);
          quicksort(left+1,end);
        }
        quicksort(0,nums.length-1);
       return nums;
    }
}
