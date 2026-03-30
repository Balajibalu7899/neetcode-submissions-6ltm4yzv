class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        if(!grid){
            return -1;
        }
        let ROWS = grid.length;
        let COLM = grid[0].length;
        let q = new Queue();
        let time = 0;
        let freshCount = 0;
        for(let r = 0;r<ROWS;r++){
            for(let c=0;c<COLM;c++){
                if(grid[r][c]===1){
                    freshCount+=1;
                }else if(grid[r][c]===2){
                    q.enqueue([r,c]);
                }
            }
        }
       while(!q.isEmpty() && freshCount > 0){
        let length = q.size();
        for( let i=0;i<length;i++){
           let [r,c] = q.dequeue();
           let directions = [[1,0],[-1,0],[0,1],[0,-1]];
           for(let [dr, dc] of directions){
             let nr = r + dr;
             let nc = c + dc;
             if(nr < 0 || nr >=ROWS || nc <0 || nc>=COLM || grid[nr][nc]!==1){
                continue;
             }
             grid[nr][nc] = 2;
             q.enqueue([nr,nc]);
             freshCount-=1;
           }
        }
        time++;
       }
       console.log(time);
       return freshCount===0 ? time : -1;
    }
}
