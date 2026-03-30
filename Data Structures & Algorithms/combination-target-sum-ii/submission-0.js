class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let a = candidates.sort((a,b)=>a-b);
        let result = [];
        function dfs(i, cur, sum){
            if(sum===target){
                result.push([...cur]);
                return;
            }
            if(sum > target || i===a.length) {
                return
                };
            // Include item
            cur.push(a[i])
            sum = sum+a[i];
            dfs(i+1, cur, sum);
            //Withoud Include;
            cur.pop();
            sum -= a[i]
            while(i<a.length && a[i]===a[i+1]){
                i+=1;
            }
           dfs(i+1, cur, sum);
        }
         dfs(0, [], 0);
         return result;
    }
}
