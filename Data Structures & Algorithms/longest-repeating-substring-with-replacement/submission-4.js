class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
         let hashmap = new Map();
         let longlength = 0;
         let L=0;
         let mostfreq = 0;
         for(let R=0; R<s.length; R++){
            if(hashmap.has(s[R])){
                hashmap.set(s[R],hashmap.get(s[R]) + 1);
            }else{
                hashmap.set(s[R], 1);
            }
            
            mostfreq = Math.max(mostfreq, hashmap.get(s[R]));
            
            let window = R - L + 1;
            if(window - mostfreq > k){
                hashmap.set(s[L],hashmap.get(s[L]) - 1);
                L++;
            }
            longlength = Math.max(longlength, R-L+1);
         }
         return longlength
    }
}
