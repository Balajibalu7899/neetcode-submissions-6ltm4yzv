class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        let sorted = intervals.sort((a,b)=>a[0] - b[0]);
        let res = [];
        for(let j=0; j < queries.length; j++)
        {   let length = Infinity;
            for(let i=0; i < sorted.length; i++){
               let [left_i, right_i] = sorted[i];
               if(left_i <= queries[j] && queries[j] <= right_i){
                length = Math.min(length, (right_i - left_i + 1));
               }
            }
            if(length!==Infinity){
                res.push(length);
            }else{
                res.push(-1);
            }
        }
        return res;
    }
}
