class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l=0, r=heights.length-1;
        let max = 0;
        while(l < r){
            let water = (r - l)*Math.min(heights[l],heights[r]);
            if(water > max){
                max = water;
            }
            if(heights[l] < heights[r]){
                l++;
            }else if(heights[l]>heights[r]){
                r--;
            }else if(heights[l]===heights[r]){
                l++;r--;

            }
        }
       return max;
    }
}
