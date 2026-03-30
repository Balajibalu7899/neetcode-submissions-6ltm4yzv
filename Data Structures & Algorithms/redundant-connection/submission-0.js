class UnionFind{
    constructor(n){
        this.parent = {};
        this.rank = {};
        for(let i=1;i<n+1;i++){
            this.parent[i] = i;
            this.rank[i] = 0;
        }
    }
    find(node){
        let p = this.parent[node];
        while(p!==this.parent[p]){
          this.parent[p] = this.parent[this.parent[p]];
          p = this.parent[p];
        }
        return p;

    }
    union(node1,node2){
        let p1 = this.find(node1);
        let p2 = this.find(node2);
        let r1 = this.rank[p1];
        let r2 = this.rank[p2];
        if(p1===p2){
            return false;
        }
        if(r1 > r2){
            this.parent[p2] = p1;
        }else if(r2 > r1){
            this.parent[p1] = p2;
        }else{
            this.parent[p2] = p1;
            this.rank[p1] +=1;
        }
        return true;
    }
}
class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    
    findRedundantConnection(edges) {
        let u = new UnionFind(edges.length);
        for(let [node1 , node2] of edges){
            if(!u.union(node1,node2)){
              return [node1,node2];
            }
        }
        return edges[edges.length - 1];
    }
}
