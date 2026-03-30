class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let sum = nums.reduce((prev,ele)=>prev+=ele);
        if(sum % 2!==0) return false;
        let n = nums.length;
        let target = sum / 2;
        let m = target + 1;

        let dp = Array.from({length: n},()=>Array(target + 1).fill(false));
        for(let i=0;i<n;i++){
            dp[i][0] = true;
        }
       for(let i=1;i<n;i++){
        for(let s=1;s<m;s++){
            let skip = dp[i-1][s];
            let include = false;
            if(s >=nums[i]){
                include = dp[i-1][s-nums[i]];
            }
            dp[i][s] = skip || include;
        }
       }
      return dp[n-1][m-1]
    }
}
