class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resLen = 0;
        let res=0;
        for(let i=0;i<s.length;i++){
            let left = i;
            let right = i;
            while(left >= 0 && right< s.length && s[left]===s[right]){
                if(right - left + 1 > resLen){
                    res = left;
                    resLen = right - left + 1;
                }
                left--;
                right++;
                
            }
            let l = i;
            let r = i+1;
            while(l>=0 && r<s.length && s[l]===s[r]){
                if(r - l + 1 > resLen){
                    res = l;
                    resLen = r - l + 1;
                }
                l--;
                r++;
            }

        }
        return s.substring(res, res+resLen);
    }
}
