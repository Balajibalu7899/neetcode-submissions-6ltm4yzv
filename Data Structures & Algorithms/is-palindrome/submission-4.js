class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    alpaNumeric(c){
      return (c >="a"&& c <="z") || (c>="A"&&c<="Z") || (c>="0" && c<="9")
    }
    isPalindrome(s) {
       let l=0;
       let r=s.length-1;
       while(l<r){
         while(l<r && !this.alpaNumeric(s[l])){
            l++;
         }
         while(r > l && !this.alpaNumeric(s[r])){
            r--;
         }
         if(s[l].toLowerCase()!==s[r].toLowerCase()){
            return false;
         }
         l++;
         r--;
       }
       return true;
    }
}
