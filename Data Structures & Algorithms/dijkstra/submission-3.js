/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        let adjlist = new Map();
        for(let i=0; i<=n-1;i++){
            adjlist.set(i,[]);
        }
        for(let [s,d,w] of edges){
            adjlist.get(s).push([w, d]);
        }
        let shortest = {};
        const pq = new PriorityQueue((a, b) => a[0] - b[0]);
        pq.enqueue([0, src]);
        while(!pq.isEmpty()){
            let [weight , src] = pq.dequeue();
            if(shortest.hasOwnProperty(src)){
                continue;
            }
            shortest[src] =  weight;
            for(let [nnw, nn] of adjlist.get(src)){
                if(!shortest.hasOwnProperty(nn)){
                    pq.enqueue([weight + nnw, nn]);
                }
               
            }
        }
       for(let i=0;i<=n-1;i++){
         if(shortest.hasOwnProperty(i)){
            continue;
         }else{
            shortest[i] = -1;
         }
       }
       return shortest;

    }
}
