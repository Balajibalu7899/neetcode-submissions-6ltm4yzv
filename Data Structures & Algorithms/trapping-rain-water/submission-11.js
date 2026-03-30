class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
       let sum = 0;
       for(let i=0;i<height.length;i++){
         let maxLeft = 0;
         for(let j=i-1;j>=0;j--){
            if(height[j] > maxLeft){
                maxLeft = height[j];
            }
         }
         let maxRight = 0;
         for(let r=i+1;r<height.length;r++){
            if(maxRight < height[r]){
                maxRight = height[r];
            }
         }
         sum+=Math.max(0, Math.min(maxLeft, maxRight) - height[i]);
       }
       return sum
    }
}
