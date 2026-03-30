class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        const ar = [];
        let maxProduct = nums[0];
        for(let i=0;i<nums.length;i++){
            let prod = 1;
            for(let j=i;j<nums.length;j++){
                prod=prod * nums[j];
                maxProduct = Math.max(maxProduct, prod);
            }  
            
        }
        return maxProduct;
    }
}
