class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n= height.length;
        let sum = 0;
        for(let i=0;i<n;i++){
            let maxLeft = 0;
            let maxRight = 0;
            for(let l=i-1;l>=0;l--){
                if(height[l]>maxLeft){
                    maxLeft = height[l];
                }
            }
            for(let r=i+1;r<n;r++){
                if(height[r]>maxRight){
                    maxRight = height[r];
                }
            }
            let water = Math.min(maxLeft,maxRight)-height[i];
            if(water > 0){
                sum+=water;
            }
        }
        return sum;
    }
}
