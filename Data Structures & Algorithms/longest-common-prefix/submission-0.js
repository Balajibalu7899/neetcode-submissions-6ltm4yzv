class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let word1 = strs[0];
        for(let i=1;i<strs.length;i++){
            let word2 = strs[i];
            let L = 0;
            let R = 0;
            while(L <= word2.length && word1[L]===word2[R]){
                L++;
                R++;
            }
            word1 = word1.slice(0,L);
        }
        return word1;
    }
}
