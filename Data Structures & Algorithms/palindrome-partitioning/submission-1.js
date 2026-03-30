class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
       let result = [];
       function isPalindrome(start,end){
         while(start < end){
             if(s[start]!==s[end-1]) return false;
             start++;
             end--;
         }
         return true;
       }
       function backtrack(start,current){
           if(start===s.length){
              result.push([...current]);
              return;
           }
          for(let j=start;j<s.length;j++){
              if(isPalindrome(start, j+1)){
                 current.push(s.slice(start,j+1))
                 backtrack(j+1,current);
                 current.pop();
              }
          }
       }
       backtrack(0,[]);
       return result;
    }
    
}
