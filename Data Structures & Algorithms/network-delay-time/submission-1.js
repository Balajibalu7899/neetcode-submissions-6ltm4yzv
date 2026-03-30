class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        let adjlist = {};
        for(let i=1; i<n+1; i++){
            adjlist[i] = [];
        }
        for(let [src,dest,weight] of times){
            adjlist[src].push([dest,weight]);
        }
        let shortest = new Map();
        let minheap = new PriorityQueue((a,b)=>a[0]-b[0]);
        minheap.enqueue([0,k]);
        while(!minheap.isEmpty()){
            let [cw1,cn1] = minheap.dequeue();
            if(shortest.has(cn1)){
                continue;
            }
            shortest.set(cn1,cw1);
            for(let [nn2,nw2] of adjlist[cn1]){
                if(!shortest.has(nn2)){
                    minheap.enqueue([cw1 + nw2 , nn2]);
                }
            }
        }
      if(shortest.size!==n){
        return  -1;
      }else{
        let max  = -Infinity;
        for(let x of shortest.values()){
            max = Math.max(max, x);
        }
        return max;
      }
    }
}
