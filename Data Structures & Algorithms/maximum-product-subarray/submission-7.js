class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxProduct = Math.max(...nums);
        let cMax = 1;
        let cMin = 1;
        for(let num of nums){
            if(num===0){
                cMin = 1;
                cMax = 1;
                continue;
            }
            let temp = cMax * num;
            cMax = Math.max(cMax * num, cMin * num, num);
            cMin = Math.min(temp, cMin * num, num);
            maxProduct = Math.max(maxProduct, cMax);
            
        }
        return maxProduct;
    }
}
