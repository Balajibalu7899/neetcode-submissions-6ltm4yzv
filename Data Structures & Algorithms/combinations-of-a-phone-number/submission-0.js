class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
       let phone = {
           2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'qprs',
            8: 'tuv',
            9: 'wxyz',
       } 
       let result = [];
       function backtrack(i,str){
          if(str.length===digits.length){
             result.push(str);
             return;
          }
         for(let c of phone[digits[i]]){
            backtrack(i+1, str+c);
         }

       }
      if(digits.length > 0){
        backtrack(0,"");
      }
      return result;
    }
}
