class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];
        function backtrack(i,curr){
            if(i===nums.length){
                result.push([...curr]);
                return;
            }
            //include 
            curr.push(nums[i]);
            backtrack(i+1,curr);

            //exclude
            curr.pop();
            backtrack(i+1,curr);
        }
        backtrack(0,[]);
        return result;
    }
}
