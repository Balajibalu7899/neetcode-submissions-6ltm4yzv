class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
    //     function quicksort(start, end){
    //         if(end - start + 1 <=1){
    //             return;
    //         }
    //         let pivot = end;
    //         let left = start;
    //         for(let i = start; i<end; i++){
    //            if(nums[i] <= nums[pivot]){
    //              [nums[i], nums[left]] = [nums[left], nums[i]];
    //              left++;
    //            }
    //         }
    //       [nums[left], nums[pivot]] = [nums[pivot], nums[left]];
    //       quicksort(start,left-1);
    //       quicksort(left+1,end);
    //     }
    //     quicksort(0,nums.length-1);
    //    return nums;
    function conquer(start, mid, end){
       let length1 = mid - start + 1;
       let length2 = end - mid;
       let LA = new Array(length1);
       let RA = new Array(length2);
       for(let i=0; i<length1;i++){
         LA[i] = nums[start + i];
       }
       for(let j=0; j<length2;j++){
        RA[j] = nums[mid + 1 + j];
       }
       let l=0;
       let r=0;
       let k = start;
       while(l < length1 && r < length2){
         if(LA[l] <= RA[r]){
            nums[k] = LA[l];
            l++;
         }else if(RA[r] <= LA[l]){
            nums[k] = RA[r];
            r++;
         }
         k++;
       }
       while(l < length1){
         nums[k] = LA[l];
         l++;
         k++;
       }
       while(r < length2){
        nums[k] = RA[r];
        r++;
        k++;
       }

    }
    function divide(start, end){
        if( start < end ) {
             let mid = Math.floor((start + end)/2);
             divide(start, mid);
             divide(mid+1, end);
             conquer(start, mid, end);
        } 
        return;
    }
     divide(0, nums.length-1);
     return nums;
    }
}
