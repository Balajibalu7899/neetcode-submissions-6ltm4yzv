class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let max = 0;
       let L = 0;
       let R = heights.length - 1;
       while(L < R){
         let water = (R - L) * Math.min(heights[L], heights[R]);
         max = Math.max(max, water);
         if(heights[L] < heights[R]){
            L++;
         }else if(heights[L] > heights[R]){
            R--;
         }else if(heights[L] === heights[R]){
           L++;
           R--;
         }
       }
       return max;
    }
}
