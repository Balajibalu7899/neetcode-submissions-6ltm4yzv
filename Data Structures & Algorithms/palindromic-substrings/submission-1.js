class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    
    countSubstrings(s) {
      let count = 0;
      let n = s.length;
      for(let i=0;i<n;i++){
        //odd length:
        let l = i;
        let r = i;
        while(l>=0 && r < n && s[l]===s[r]){
            l--;
            r++;
            count+=1;
        }
        let ll = i;
        let rr = i+1;
        while(ll>=0 && rr < n && s[ll]===s[rr]){
            ll--;
            rr++;
            count+=1;
        }
      }
      return count;
    }
}
