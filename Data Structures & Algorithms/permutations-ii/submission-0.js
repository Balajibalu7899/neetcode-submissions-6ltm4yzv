class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let arr = nums.sort((a,b)=>a-b);
        let result = [];
        let check = new Array(nums.length).fill(false);
        function backtrack(c,current){

           if(current.length===nums.length){
             result.push([...current]);
             return;
           }
           for(let c=0;c<nums.length;c++){
            if(arr[c]===arr[c-1] && check[c-1]===false){
                continue;
            }
              if(!check[c]){
                 current.push(arr[c]);
                 check[c] = true;
                 backtrack(c,current);
                 check[c] = false;
                 current.pop();
              }
           }
        }
        backtrack(0,[]);
        return result;
    }
}
