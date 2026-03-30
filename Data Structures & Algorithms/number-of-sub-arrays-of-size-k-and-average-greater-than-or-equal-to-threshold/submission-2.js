class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let L = 0;
        let sum = 0;
        let count = 0;
        for(let R = 0; R < arr.length; R++){
            sum += arr[R];
           if(R - L + 1 === k){
            
             if(sum >= threshold*k){
                count+=1;
             }
             sum -= arr[L];
             L++;
           }
           
        }
        return count;
    }
}
