class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let sorted = intervals.sort((a,b)=>a[0] - b[0]);
        let count = 0;
        let prevEnd = sorted[0][1];
        for(let i=1;i<sorted.length; i++){
            let cur = sorted[i];
            if(prevEnd > cur[0]){
                prevEnd = Math.min(prevEnd, cur[1]);
                count++;
            }else{
               prevEnd = cur[1];
            }
        }
        return count;
    }
}
