class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let result = [];
        function ispalendrome(start, end){
                while(start < end){
                      if(s[start]!==s[end]){
                           return false;
                        }
                        start++;
                        end--;
                 }
                    return true;
         }
        function backtrack(start,temp){
            if(start===s.length){
                result.push([...temp]);
                return ;
            }
           for(let end = start; end < s.length;end++){
            let str = s.slice(start,end+1);
            if(ispalendrome(start,end)){
                temp.push(str);
                backtrack(end+1,temp);
                temp.pop();
            }
           } 
        }
        backtrack(0,[]);
        return result;
    }
    
}
