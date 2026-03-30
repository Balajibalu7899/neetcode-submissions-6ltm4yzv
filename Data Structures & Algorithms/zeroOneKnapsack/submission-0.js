class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        let dp = Array.from({length: profit.length},()=>Array(capacity+1).fill(0));
        let n = weight.length;
        let m = capacity + 1;
        for(let i=0 ; i<n;i++){
            dp[i][0] = 0;
            for(let c=0;c<m;c++){
                 if(weight[0] <= c){
                    dp[0][c] = profit[0]
                 }
            }
        }
        for(let i=1;i<n;i++){
            for(let c=1;c<m;c++){
                let skip = dp[i-1][c];
                let include = 0;
                if(c - weight[i] >= 0){
                    include = profit[i] + dp[i-1][c-weight[i]];
                }
                dp[i][c] = Math.max(skip, include);
            }
        }
       return dp[n-1][m-1]
    }
}
