class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let sorted = intervals.sort((a,b)=>a[0] - b[0]);
        let result = [];
        result.push(sorted[0]);
        for(let i=1; i<sorted.length; i++){
           let current = sorted[i];
           if(result[result.length-1][1] >= current[0]){
             result[result.length-1][1] = Math.max(current[1],result[result.length-1][1]);
           }else{
             result.push([...current]);
           }
        }
        return result;
    }
}
