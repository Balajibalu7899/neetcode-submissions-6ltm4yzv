class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        /*
        //first we append the all intervals whose end value is less than the start if the newInterval;
        1. we reached interval whose start > newIntervalEnd
        2. or we find overlapping
        iterate through remaining intervals update the new interval if its end >= currentstart
        after remaining appended and return the list:
         */
       
      let res = [];
      for(let interval of intervals){
         if(newInterval === null || interval[1] <  newInterval[0]){
            res.push(interval);
         }else if(interval[0] > newInterval[1]){
            res.push(newInterval);
            res.push(interval);
            newInterval=null;
         }else{
            newInterval[0] = Math.min(interval[0], newInterval[0]);
            newInterval[1] = Math.max(interval[1], newInterval[1]);
         }
      }
      if(newInterval!==null) res.push(newInterval);
      return res;
    }
}
