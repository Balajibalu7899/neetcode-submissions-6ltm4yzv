class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let hashset = new Map();
        let length = 0;
        let l = 0;
        for(let r=0;r<s.length; r++){
            if(hashset.has(s[r])){
                hashset.set(s[r], hashset.get(s[r]) + 1 );
            }else{
                hashset.set(s[r], 1);
            }
            let mostfreq, val=0;
            for(let [key,value] of hashset.entries()){
                if(value > val){
                    val = value;
                    mostfreq = key;
                }
            }
            let window = r - l + 1;
            if(window - hashset.get(mostfreq) <= k){
                length = Math.max(length, window);
            }else{
                hashset.set(s[l], hashset.get(s[l]) - 1);
                l++;  
            }
        }
        return length;
    }
}
