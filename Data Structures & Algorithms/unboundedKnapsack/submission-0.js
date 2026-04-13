class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        let cache = new Map();
        function dfs(i, capacity){
            let key = `${i},${capacity}`;
           if(i>=profit.length) return 0;
           if(cache.has(key)) return cache.get(key);
           //skip 
           let maxprofit = dfs(i+1, capacity);
           //include
           let newcap  = capacity - weight[i];
           if(newcap >= 0){
            let p = profit[i] + dfs(i, newcap);
            maxprofit = Math.max(p,maxprofit);
           }
           cache.set(key, maxprofit);
           return maxprofit;
        }
        return dfs(0,capacity);
    }
}
