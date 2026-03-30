class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxprofit = 0;
        let left = 0,right=1;
        while(right < prices.length){
            if(prices[left] < prices[right]){
                let profit = prices[right] - prices[left];
                maxprofit = Math.max(maxprofit, profit);
            }else{
                left = right;
            }
            right+=1;
        }
        return maxprofit;
    }
}
