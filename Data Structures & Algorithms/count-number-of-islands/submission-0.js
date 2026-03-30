class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if(!grid){
            return 0;
        }
        let ROWS = grid.length;
        let COLM = grid[0].length;
        let visited = new Set();
        let count = 0;
        function bfs(r,c){
          let q = new Queue();
          q.enqueue([r,c]);
          visited.add(`${r},${c}`);
          while(q.size()>0){
             let [row,col] = q.dequeue();
             let directions = [[1,0],[-1,0],[0,1],[0,-1]];
             for(let [dr,dc] of directions){
                 let ro = row + dr;
                 let co = col + dc;
                if(ro > -1 && co > -1 && ro < ROWS && co < COLM && grid[ro][co]==='1'&&!visited.has(`${ro},${co}`)){
                        visited.add(`${ro},${co}`);
                        q.enqueue([ro,co]);
                }
             }
          }
        }
        for(let r=0;r<ROWS;r++){
            for(let c=0;c<COLM;c++){
                if(grid[r][c]==="1" && !visited.has(`${r},${c}`)){
                    bfs(r,c);
                    count+=1;
                }
            }
        }
        return count;
    }
}
