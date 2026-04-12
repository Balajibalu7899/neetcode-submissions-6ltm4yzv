/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {Array<Array<number>>} edges
     * @returns {number}
     */
    minimumSpanningTree(n, edges) {
        let adjlist = new Map();
        for(let i=0; i<=n-1; i++){
            adjlist.set(i,[]);
        }
        for(let [s,d,w] of edges){
            adjlist.get(s).push([d,w]);
            adjlist.get(d).push([s,w]);
        }
        const minheap = new PriorityQueue((a,b)=>a[0]-b[0]);
        for(let [dest , weight] of adjlist.get(0)){
          minheap.enqueue([weight, 0, dest]);
        }
        let visited = new Set();
        let mst = [];
        let totalw = 0;
        visited.add(0);
        while(visited.size < n && !minheap.isEmpty()){
            let [w, s, d] = minheap.dequeue();
            if(visited.has(d)){
                continue;
            }
            visited.add(d);
            mst.push([s,d]);
            totalw+=w;
            for(let [nn , nw] of adjlist.get(d)){
                if(!visited.has(nn)){
                    minheap.enqueue([nw, d, nn]);
                }
            }

        }
        return visited.size===n ? totalw : -1;
    }
}
