class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];
        function backtrack(opened,closed,current){
            if(current.length ===2*n){
                result.push(current.join(""));
                return;
            }
            //include Open
            if(opened < n){
                current.push("(");
                opened+=1;
                backtrack(opened,closed,current);
                current.pop();
                opened-=1;
            }
            if(closed < opened){
                current.push(")");
                closed+=1;
                backtrack(opened,closed,current);
                current.pop();
                closed-=1;
            }
          
        }
        backtrack(0,0,[]);
        return result;
    }
}
