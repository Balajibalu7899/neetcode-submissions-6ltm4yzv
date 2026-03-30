class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let hashset = new Set();
        let L = 0;
        let len = 0;
        for(let R=0; R<s.length; R++){
            while(hashset.has(s[R])){
               hashset.delete(s[L]);
                L++;
            }
            hashset.add(s[R]);
            len = Math.max(len, R-L+1);
        }
        return len;
    }
}
