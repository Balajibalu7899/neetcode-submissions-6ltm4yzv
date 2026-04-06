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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        let sorted = intervals.sort((a,b)=>a.start - b.start);
        for(let i=1;i<intervals.length;i++){
         let prev = sorted[i-1];
         let current = sorted[i];
         if(current.start < prev.end){
            return false;
          }
        }
        return true;
    }
}
