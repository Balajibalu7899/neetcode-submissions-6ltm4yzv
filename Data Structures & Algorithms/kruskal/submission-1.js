/**
 * const PriorityQueue = require('priority-queue-js');
 */
class UnionFind{
    constructor(n){
        this.parent = {};
        this.rank = {};
        for(let i=0; i<=n-1; i++){
            this.parent[i] = i;
            this.rank[i] = 0;
        }
    }
    findparent(node){
      if(node!==this.parent[node]){
        this.parent[node] = this.findparent(this.parent[node]);
      }
      return this.parent[node];
    }
    union(node1, node2){
        let p1 = this.findparent(node1);
        let p2 = this.findparent(node2);
        if(p1===p2) return false;
        let r1 = this.rank[node1];
        let r2 = this.rank[node2];
        if(r1 > r2){
            this.parent[p2] = p1;
            this.rank[p1]++;
        }else if(r2 > r1){
            this.parent[p1] = p2;
            this.rank[p2]++;
        }else{
            this.parent[p2] = p1;
            this.rank[p1]++;
        }
        return true;
    }
}
class Solution {
    /**
     * @param {number}
     * @param {Array<Array<number>>}
     * @returns {number}
     */
    minimumSpanningTree(n, edges) {
      let unionfind = new UnionFind(n);
      let minheap = new PriorityQueue((a,b)=>a[0] - b[0]);
      for(let [s, d, w] of edges){
         minheap.enqueue([w, s, d]);
      }
      let mst = [];
      let weight = 0;
      let visited = new Set();
      while(!minheap.isEmpty() && mst.length <= n-1){
        let [w,s,d] = minheap.dequeue();
        if(visited.has(`${s},${d}`)){
            continue;
        }
        visited.add(`${s},${d}`);
        if(unionfind.union(s,d)){
            mst.push([s,d]);
            weight+=w;
        }
      }
      return mst.length===n-1 ? weight : -1;
    }
}
