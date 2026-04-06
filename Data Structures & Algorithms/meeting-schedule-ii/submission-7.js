/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        /*
        Need to return the minimum number of rooms required to schedule all meetings without conflits:
         */
        let start = intervals.map((ele)=>ele.start).sort((a,b)=>a - b);
        let end = intervals.map((ele)=>ele.end).sort((a,b)=>a - b);
        let s = 0;
        let e = 0;
        let count = 0;
        let res = 0;
        while(s < start.length){
            if(start[s] < end[e]){
                count++;
                s++;
            }else {
                count--;
                e++;
            }
            res = Math.max(res, count);
        }
        return res;
        
    }
}
