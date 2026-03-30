class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
       let result = [];
       let order = nums.sort((a,b)=>a-b);
       function backtrack(index, currentstate){
           if(index===order.length){
            result.push([...currentstate]);
            return;
           }
           //include
           currentstate.push(order[index]);
           backtrack(index+1,currentstate);
           currentstate.pop();
           while(order[index]===order[index + 1]){
            index++;
           }
           //exclude
           backtrack(index+1,currentstate);
       }
       backtrack(0,[]);
       return result;
    }
}
