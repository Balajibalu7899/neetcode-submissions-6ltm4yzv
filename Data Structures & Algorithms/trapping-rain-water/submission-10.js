class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
       let sum = 0;
       for(let i = 0 ; i<height.length; i++){
         let maxLeftheight = 0;
         let maxRightheight = 0;
         for(let L=i-1;L>=0;L--){
             if(height[L] > maxLeftheight){
                maxLeftheight = height[L];
             }
         }
         for(let R=i+1; R<height.length;R++){
            if(height[R] > maxRightheight){
                maxRightheight = height[R];
            }
         }
         let water = 1 *  ( Math.min(maxLeftheight, maxRightheight) - height[i] );
         if(water > 0){
            sum +=water;
         }
       }
       return sum;
    }
}
