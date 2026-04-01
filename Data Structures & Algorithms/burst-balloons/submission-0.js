class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    /*
    nums[i] represents the ith Baloon 
    Bust the ith balloon coins = nums[i-1]* nums[i] * nums[i+1]
    if(i-1) goes out of bound then assume its 1
    if(i+1) goes out f bound then assume its 1
    RETURN maximum number of coins you receive by bursting all balloons
    PATTERN: burst the smallest first then 2ns smallest then 3rd smallest and so on
    we process the l and r that is the range of indices that need to process
    we add 1 on both sides of array, but l and r represents the first and last input of array
    DETERMINE the result: by considering popping atlast 1
    For Each element:
    array[l-1] * element * array[r+1]
    then solve the sub problems range from (l,i-1) and (i+1, r) 

     */
    
    maxCoins(nums) {
        let vals = [1, ...nums,1];
        let memo = new Map();
      function dfs(l,r){
        if(l > r) return 0;
        if(memo.has(`${l},${r}`)) return memo.get(`${l},${r}`)
        let max = 0;
        for(let k=l;k<=r;k++){
             let coins = vals[l-1]* vals[k] * vals[r+1];
             coins += dfs(l, k-1) + dfs(k+1,r);
             max = Math.max(max,coins);
        }
        memo.set(`${l},${r}`,max);
       return max;
      }  
      return dfs(1,nums.length) ;
    }
}
