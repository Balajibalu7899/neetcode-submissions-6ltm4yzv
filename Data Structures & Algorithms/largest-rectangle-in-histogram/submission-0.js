class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let area = 0;
        for(let i=0; i<heights.length; i++){
           let left = i-1;
           let leftcount = 0;
           while(left >=0){
             if(heights[left] < heights[i]){
                break;
             }else if(heights[left] > heights[i]){
                leftcount++;
             }
            left--;
           }
           let right = i+1;
           let rightcount = 0;
           while(right < heights.length){
            if(heights[right] < heights[i]){
                break;
            }else if(heights[right] >= heights[i]){
                rightcount++;
            }
            right++;
           }
           console.log("/nIteration",i,"leftcount:",leftcount,"rightcount:",rightcount);
         area = Math.max(area, heights[i]*(leftcount + rightcount + 1));
        }
        return area;
    }
}
