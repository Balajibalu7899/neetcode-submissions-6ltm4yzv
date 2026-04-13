class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        // let cache = new Map();
        // function dfs(i, capacity){
        //     let key = `${i},${capacity}`;
        //    if(i>=profit.length) return 0;
        //    if(cache.has(key)) return cache.get(key);
        //    //skip 
        //    let maxprofit = dfs(i+1, capacity);
        //    //include
        //    let newcap  = capacity - weight[i];
        //    if(newcap >= 0){
        //     let p = profit[i] + dfs(i, newcap);
        //     maxprofit = Math.max(p,maxprofit);
        //    }
        //    cache.set(key, maxprofit);
        //    return maxprofit;
        // }
        // return dfs(0,capacity);
        let ROWS = profit.length;
        let COLM = capacity + 1;
        let dp = Array.from({length: ROWS},()=>Array(COLM).fill(0));
        for(let i=0;i<ROWS;i++){
            dp[i][0] = 0;
            for(let c=0;c<COLM;c++){
                   if(weight[i] <= c){
                      dp[0][c] = (Math.floor(c / weight[0])) * profit[0];
                    }
            }
        }
        for(let i=1;i<ROWS; i++){
            for(let c=1;c<COLM;c++){
                //skip
                let skip = dp[i-1][c];
                //include
                let include = 0;
                if(c - weight[i] >= 0){
                  include = profit[i] + dp[i][c-weight[i]];
                }
                dp[i][c] = Math.max(skip, include);
            }
        }
        return dp[ROWS-1][COLM-1];
        
    }
}
