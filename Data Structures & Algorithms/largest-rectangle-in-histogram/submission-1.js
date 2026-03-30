class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let area = 0;
        let stack = [];
        for(let i=0; i<heights.length; i++){
               let left=i;
                while(stack.length > 0 && stack[stack.length - 1][1] > heights[i]){
                  let [index, height] = stack.pop();
                  area = Math.max(area, height * (i - index));
                  left = index;
                }
                 stack.push([left, heights[i]])
        }
        for (const [startIdx, h] of stack) {
    const width = heights.length - startIdx;
    area = Math.max(area, h * width);
}
        return area;
    }
}
