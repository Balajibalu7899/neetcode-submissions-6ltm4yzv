class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let cache = new Map();
        function dfs(index){
            if(index>=nums.length-1) return 0;
            let min = Infinity;
            if(cache.has(index)) return cache.get(index);
            if(nums[index]===0) return Infinity;
            for(let k=1;k<=nums[index];k++){
                let sum = 1 + dfs(index + k);
                min = Math.min(sum,min);
            }
            cache.set(index, min);
            return min;

        }
        return dfs(0);
    }
}
