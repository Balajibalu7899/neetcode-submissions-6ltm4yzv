class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number[]} succProb
     * @param {number} start_node
     * @param {number} end_node
     * @return {number}
     */
    maxProbability(n, edges, succProb, start_node, end_node) {
         let adjlist = {};
         for(let i=0; i<n ;i++){
            adjlist[i] = [];
         }
         for(let i=0;i<edges.length; i++){
            let [src, dest] = edges[i];
            let weight = succProb[i];
            adjlist[src].push([dest, weight]);
            adjlist[dest].push([src, weight]);
         }
        let longest = new Map();
        let maxheap = new PriorityQueue((a,b)=>b[0]-a[0]);
        maxheap.enqueue([1.0,start_node]);
        while(!maxheap.isEmpty()){
            let [cw,cn] = maxheap.dequeue();
            if(longest.has(cn)){
                continue;
            }
           
            longest.set(cn, cw);
             if(longest.has(end_node)){
                return longest.get(end_node);
            }
            for(let [neighbornode, neighborweight] of adjlist[cn]){
                if(!longest.has(neighbornode)){
                    maxheap.enqueue([neighborweight * cw, neighbornode])
                }
            }
        } 
        return 0;
    }
}
