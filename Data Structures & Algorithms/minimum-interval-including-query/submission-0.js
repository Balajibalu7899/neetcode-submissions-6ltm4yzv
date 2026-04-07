class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        // minheap based on the size value:
       const minheap = new PriorityQueue((a,b)=>a[0] - b[0]);
       //sorted the intervals in the asending order:
       const sortedinterval = intervals.sort((a,b)=>a[0] - b[0]);
       let i = 0;
      //sorted queries in the asending order
       const sortedq = [...queries].sort((a,b)=>a - b);
       let hashmap = new Map();
       for(let query of sortedq){
          while(i < sortedinterval.length && sortedinterval[i][0] <= query){
            let [start, end] = sortedinterval[i];
            minheap.enqueue([end - start + 1, end]);
            i++;
          }
          while(!minheap.isEmpty() && minheap.front()[1] < query){
            minheap.dequeue();
          }
          if(!minheap.isEmpty()){
             hashmap.set(query, minheap.front()[0]);
          }else{
            hashmap.set(query, -1);
          }
       }
       return queries.map(q => hashmap.get(q));
    }
}
