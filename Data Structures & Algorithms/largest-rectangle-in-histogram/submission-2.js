class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let area = 0;
        let stack = [];
        for(let i=0; i<heights.length; i++){
               let left;
                while(stack.length > 0 && heights[i] < stack[stack.length - 1][1]){
                  let [index, height] = stack.pop();
                  area = Math.max(area, height * (i - index));
                  left = index;
               }
               stack.push([left ?? i, heights[i]])
        }
        let i=0;
        while(i<stack.length){
            area = Math.max(area, stack[i][1]*(heights.length - stack[i][0]))
            i++;
        }
        return area;
    }
}
