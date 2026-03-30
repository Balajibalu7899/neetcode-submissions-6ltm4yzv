class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let array = nums.sort((a,b)=>a-b);
        let result = [];
        
        function dfs(current, index){
            if(index >=array.length){
                result.push([...current]);
                return;
            }
            //include
            current.push(array[index]);
            dfs(current, index+1);
            current.pop();
            while(array[index]===array[index+1]){
                index+=1;
            }
            dfs(current, index+1);
        }
        dfs([],0);
        return result;
    }
}
