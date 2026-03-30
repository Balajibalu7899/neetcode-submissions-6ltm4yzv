class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let dist = new Array(n).fill(Infinity);
        dist[src] = 0;
        for(let i=0; i<=k; i++){
            let temp = [...dist];
            for(let [u, v, weight] of flights){
                if(dist[u]===Infinity) continue;
              if(dist[u] + weight < temp[v]){
                  temp[v] = dist[u] + weight;
              }
            }
            dist = temp;
        }
       return dist[dst]===Infinity ? -1: dist[dst];
    }
}
