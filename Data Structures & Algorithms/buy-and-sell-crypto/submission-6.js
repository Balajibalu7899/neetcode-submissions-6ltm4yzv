class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
         let maxprofit = 0;
         let  l = 0;
         let r = 1;
         while(r < prices.length){
            if(prices[r] > prices[l]){
               maxprofit = Math.max(maxprofit, prices[r]-prices[l]);
                
            }else{
                l = r;
            }
            r++;
         }
         return maxprofit
     }
}
