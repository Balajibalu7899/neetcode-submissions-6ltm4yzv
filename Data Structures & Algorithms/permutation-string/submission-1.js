class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let a1 = new Array(26).fill(0);
        for(let i=0;i<s1.length;i++){
            let index = s1[i].charCodeAt(0) - 'a'.charCodeAt(0);
            a1[index] = a1[index] + 1;
        }
        let a2 = new Array(26).fill(0);
        let left = 0;
        for(let right = 0; right<s2.length; right++){
           let index = s2[right].charCodeAt(0) - 'a'.charCodeAt(0);
           a2[index] = a2[index] + 1;
           if(right - left + 1 == s1.length){
             let leftindex = s2[left].charCodeAt(0) - 'a'.charCodeAt(0);
             if(a1.join("")===a2.join("")){
                return true;
             }
             a2[leftindex] = a2[leftindex] - 1;
             left++;
           }
        }
        return false;
    }
}
