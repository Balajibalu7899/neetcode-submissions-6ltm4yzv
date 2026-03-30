class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];
        function backtrack(open,close,current){
            if(current.length===2*n){
                result.push(current.join(""));
                return;
            }
            if(close > open){
                return;
            }
          
           
           if(open < n){
              current.push("(")
              open+=1;
               backtrack(open,close,current);
               open-=1;
               current.pop();
           }
           if(close < open){
             current.push(")")
             close+=1;
              backtrack(open,close,current);
              close-=1;
              current.pop();
            }
          
           
        }
        backtrack(0,0,[]);
        return result;

    }
}
