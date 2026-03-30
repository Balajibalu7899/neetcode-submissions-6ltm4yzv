class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let bucket = [0,0,0];
        for(let i=0;i<nums.length;i++){
            bucket[nums[i]] +=1;
        }
        console.log(bucket);
        let i=0;
        for(let j=0;j<bucket.length;j++){
            for(let k=0;k<bucket[j];k++){
                nums[i] = j;
                i++;
            }
        }
    }
}
