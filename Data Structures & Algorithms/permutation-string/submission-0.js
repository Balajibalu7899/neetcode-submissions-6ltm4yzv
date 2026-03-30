class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let a1 = new Array(26).fill(0);
        let hashMap = new Map();
        for(let i=0;i<s1.length;i++){
            let index = s1[i].charCodeAt(0) - 'a'.charCodeAt(0);
            a1[index] = a1[index] + 1;
        }
        console.log("a1.join",a1.join(""));
        let a2 = new Array(26).fill(0);
        let left = 0;
        for(let right = 0; right<s2.length; right++){
           
           let index = s2[right].charCodeAt(0) - 'a'.charCodeAt(0);
           a2[index] = a2[index] + 1;
           if(right - left + 1 == s1.length){
            console.log("subarray:",s2.slice(left,right+1));
             let leftindex = s2[left].charCodeAt(0) - 'a'.charCodeAt(0);
             console.log("a2:",a2.join(""),"condition:",a1.join("")===a2.join(""))
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
