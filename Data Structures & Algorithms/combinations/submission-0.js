class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let result = [];
        function backtrack(i,current){
            if(current.length===k){
                result.push([...current]);
                return;
            }
            if(i===n){
                return;
            }
            
            for(let j=i+1;j<=n;j++){
              current.push(j);
              backtrack(j,current);
              current.pop();
            }
           
        }
        backtrack(0,[]);
        return result;
    }
   
}
