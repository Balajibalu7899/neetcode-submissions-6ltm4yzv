class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxprofit = 0;
        let min = prices[0];
        for(let i=1; i<prices.length; i++){
            let profit = prices[i] - min;
            if(profit > maxprofit){
                maxprofit = profit;
            }
            if(prices[i]<min){
                min = prices[i];
            }
        }
        return maxprofit;
    }
}
