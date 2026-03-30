class UnionFind {
    constructor(n){
        this.parent = {};
        this.rank = {};
        this.count = n;
        for(let i=0; i<n; i++){
            this.parent[i] = i;
            this.rank[i] = 0;
        }
    }
    find(node){
        if (this.parent[node] === node) return node;
        return this.parent[node] = this.find(this.parent[node]);
    }
    union(node1, node2){
    let p1 = this.find(node1);
    let p2 = this.find(node2);
    if(p1 === p2){
        return false;
    }
    let r1 = this.rank[p1];
    let r2 = this.rank[p2];
    if(r1 > r2){
        this.parent[p2] = p1;
    }else if(r2 > r1){
        this.parent[p1] = p2;
    }else{
      this.parent[p2] = p1;
      this.rank[p1]+=1;
    }
        this.count--;
        return true;
    }
}
class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[][]}
     */
    findCriticalAndPseudoCriticalEdges(n, edges) {
        for(let i=0;i<edges.length;i++){
            let edge = edges[i];
            let [src, dest, weight] = edge;
            edges[i] = [src,dest,weight,i];
        }
        edges.sort((edge1, edge2)=>edge1[2] - edge2[2]);
        let mstweight = 0;
        let u = new UnionFind(n);
        for(let [src, dest, weight, i] of edges){
            if(u.union(src, dest)){
                mstweight+=weight;
            }
        }
        let critical = [];
        let pseudocritical = [];
        for(let [n1, n2, w1, i] of edges){
            //not including i:
            let weight = 0;
            let u2 = new UnionFind(n);
            for(let [ln1,ln2,lw1,j] of edges){
              if(i!==j && u2.union(ln1,ln2)){
                 weight+=lw1;
              }
            }
            if(u2.count > 1 || weight > mstweight){
                critical.push(i);
                continue;
            }
            let u3 = new UnionFind(n);
            u3.union(n1,n2);
            let w2 = w1;
            for(let [xn1, xn2, xw1,xi] of edges){
                if(u3.union(xn1,xn2)){
                    w2+=xw1;
                }
            }
            if(w2 === mstweight){
                pseudocritical.push(i);
            }
        }
       return [critical, pseudocritical];
    }
}