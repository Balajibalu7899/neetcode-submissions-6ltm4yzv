class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxprofit = 0;
        for(let i=0; i<prices.length; i++){
           for(let j=i+1; j<prices.length; j++){
              if(prices[i] < prices[j]){
                maxprofit = Math.max(maxprofit, prices[j]-prices[i])
              }
           }
        }
       return maxprofit;
    }
}
