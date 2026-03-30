class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let hashset = new Set();
        let maxlength = 0;
        let l=0;
        let r=0;
        while(r<s.length){
            while(hashset.has(s[r])){
              hashset.delete(s[l]);
              l++;
            }
            hashset.add(s[r]);
            maxlength = Math.max(maxlength, hashset.size);
            r++;
        }
       return maxlength;
    }
}
