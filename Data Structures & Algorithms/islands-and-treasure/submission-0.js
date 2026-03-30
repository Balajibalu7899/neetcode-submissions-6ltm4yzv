class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
       let ROWS = grid.length;
       let COLM = grid[0].length;
       let level = 0;
       let q = new Queue();
       for(let r=0;r<ROWS; r++){
         for(let c=0; c<COLM; c++){
            if(grid[r][c]===0){
                q.enqueue([r,c]);
            } 
         }
       } 
         let visited = new Set();
         while(q.size()){
            let lenght = q.size();
            for(let i=0;i<lenght; i++){
                 let [row, col] = q.dequeue();
                 visited.add(`${row},${col}`)
                 let directions = [[1,0],[-1,0],[0,1],[0,-1]];
                 for(let [dr,dc] of directions){
                     let ro = row+dr;
                     let co = col+dc;
                     if(ro<0||co<0||ro>=ROWS||co>=COLM||grid[ro][co]===-1 || visited.has(`${ro},${co}`)){
                        continue;
                     }
                     if(grid[ro][co]!==0&&grid[ro][co]!==-1){
                        grid[ro][co] =Math.min(grid[ro][co],level+1);
                     }
                    q.push([ro,co]);
                    visited.add(`${ro},${co}`);
                 }
            }
            level+=1;
         }
       console.log(grid);
    }
}
