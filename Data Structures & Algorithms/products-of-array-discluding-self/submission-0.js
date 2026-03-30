class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        console.log("Given Array:",nums);
        let length = nums.length;
        let prefixArray = new Array(length);
        let postfixArray = new Array(length);
        let output = new Array(length);
        prefixArray[0] = nums[0];
        for(let i=1;i<length;i++){
            prefixArray[i] = nums[i] * prefixArray[i-1];
        }
        console.log("Prefix Array is:",prefixArray);
        postfixArray[length-1] = nums[length-1];
        for(let i=length-2;i>=0;i--){
            postfixArray[i] = nums[i] * postfixArray[i+1];
        }
        console.log("PostFix Array:", postfixArray);
        output[0] = postfixArray[0+1];
        output[length-1] = prefixArray[length-2];
        for(let i=1;i<length-1;i++){
            output[i] = prefixArray[i-1] * postfixArray[i+1];
        }
        console.log("Output Array:", output);
        return output;
    }
}
