class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n= height.length;
        let maxLeft = new Array(n);
        let maxRight = new Array(n);
        maxLeft[0] = 0;;
        for(let i=1;i<n;i++){
            maxLeft[i] = Math.max(height[i-1],maxLeft[i-1]);
        }
        maxRight[n-1] = 0;
        for(let i=n-2;i>=0;i--){
            maxRight[i] = Math.max(height[i+1],maxRight[i+1]);
        }
       let sum=0;
       for(let i=0;i<n;i++){
        let water = Math.min(maxLeft[i],maxRight[i])-height[i];
        if(water >0){
           sum+=water;
        }
       }
       return sum;
    }
}
