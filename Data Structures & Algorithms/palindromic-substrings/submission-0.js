class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    ispalindrome(str){
        let l = 0;
        let r = str.length - 1;
        while(l<=r){
            if(str[l]!==str[r]){
                return false;
            }
            l++;
            r--;
           
        }
        return true;
    }
    countSubstrings(s) {
      let count = 0;
      for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            let substring = s.slice(i,j+1);
            if(this.ispalindrome(substring)){
                console.log("palindrome true:",s.slice(i,j+1));
                count+=1;
            }
        }
      }
      return count;
    }
}
