class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let length = nums.length;
     let output = new Array(length);
       let prefixProductUntilNow = 1;
       output[0] = 1;
       for(let i=1;i<length;i++){
        prefixProductUntilNow*=nums[i-1];
        output[i] = prefixProductUntilNow
       }
       console.log("Prefix Output:",output);
       let postfixUntilNow = 1;
       for(let i = length-1;i>=0;i--){
        output[i] = output[i] * postfixUntilNow;
        postfixUntilNow *=nums[i];
       }
       return (output);
    }
  
}
