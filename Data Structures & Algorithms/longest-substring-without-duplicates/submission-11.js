class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let hashset = new Set();
       let lengthsofar = 0;
       let L=0;
       for(let R=0; R<s.length; R++){
        
         while(hashset.has(s[R])){
            hashset.delete(s[L]);
            L++;
         }
         hashset.add(s[R]);
         lengthsofar = Math.max(lengthsofar, R-L+1);
       }
       return lengthsofar;
    }
}
