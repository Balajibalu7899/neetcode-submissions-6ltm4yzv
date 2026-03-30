class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let count = 0;
        let L = 0;
        let sumsofar=0;
        for(let R =0; R<arr.length; R++){
           sumsofar+=arr[R];
           
          if(R - L + 1 == k){
            if(sumsofar >= threshold * (R-L+1)){
            count++;
          }
            sumsofar -= arr[L];
            L++;
          }
          
        }
        return count;
    }
}
