class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
       let index = 0;
       let resLenght = 0;
       for(let i=0;i<s.length;i++){
        let l = i;
        let r = i;
        while(l>=0 && r < s.length && s[l]===s[r]){
            if(r-l+1 > resLenght){
               resLenght = r-l+1;
               index = l;
            }
            l--;
            r++;
        }
        let ll = i;
        let rr = i+1;
        while(ll>=0 && r < s.length && s[ll]===s[rr]){
            if(rr-ll+1 > resLenght){
                resLenght = rr - ll + 1;
                index = ll;
            }
            ll--;
            rr++;
        }
         
       }
       return s.slice(index , resLenght + index);
    }
}
