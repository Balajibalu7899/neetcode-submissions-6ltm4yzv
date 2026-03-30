class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let memo = new Map();
        function dfs(i,canBuy){
            if(i>=prices.length) return 0;
            let key = `${i},${canBuy}`;
            if(memo.has(key)) return memo.get(key);
            if(canBuy){
                let buy = dfs(i+1, false) - prices[i];
                let skip = dfs(i+1, true);
              let res = Math.max(buy, skip);
              memo.set(key, res);
              return res;
            }else{
                let sell = dfs(i+2, true) + prices[i];
                let skip = dfs(i+1, false);
                let res = Math.max(sell , skip);
                memo.set(key, res);
                return res;
            }
        }
        return dfs(0,true);
    }
}
