class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        if (points.length === 1) return 0;
        let edges = [];
        for(let i=0; i<points.length; i++){
          for(let j=i+1; j<points.length; j++){
            let weight = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
            edges.push([i, j, weight]);
          }
        }
        let graph = new Map();
        for(let [src, dest, weight] of edges){
          if(!graph.has(src)){
             graph.set(src,[]);
          }
          if(!graph.has(dest)){
            graph.set(dest,[]);
          }
          graph.get(src).push([dest, weight]);
          graph.get(dest).push([src, weight]);
        }
        let visited = new Set();
        let mst = [];
        let sum = 0;
        let minheap = new PriorityQueue((a,b)=>a[0]-b[0]);

        if (graph.has(0)) {
            for(let [dest, weight] of graph.get(0)){
               minheap.enqueue([weight, 0, dest]);
            }
        }
      if(graph.has(0)){
         visited.add(0);
      }
        while(visited.size < points.length && !minheap.isEmpty()){
            let [weight, src, dest] = minheap.dequeue();
            if(visited.has(dest)){
               continue;
            }
            visited.add(dest);
            mst.push([src,dest]);
            sum+=weight;
            if (graph.has(dest)) {
                for(let neighbor of graph.get(dest)){
                    let [nn,w] = neighbor;
                    if(!visited.has(nn)){
                        minheap.enqueue([w, dest, nn])
                    }
                }
            }

        }
        return sum;
    }
}
