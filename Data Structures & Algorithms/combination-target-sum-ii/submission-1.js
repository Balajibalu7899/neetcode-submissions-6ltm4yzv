class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = [];
        let order = candidates.sort((a,b)=>a-b);
        function backtrack(i,sum,curr){
             if(sum===target){
                result.push([...curr]);
                return;
             }
              if(sum > target){
                return;
             }
             if(i===order.length){
                return;
             }
             //include
             curr.push(order[i]);
             sum+=order[i];
             backtrack(i+1,sum,curr);
             //exclude
             sum-=order[i];
             curr.pop();
             while(order[i]===order[i+1]){
                i++;
             }
             backtrack(i+1,sum,curr);
        }
        backtrack(0,0,[]);
        return result;
    }
}
