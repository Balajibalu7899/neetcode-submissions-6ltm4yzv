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
        let directions = [[1,0],[-1,0],[0,1],[0,-1]];
        while(q.size() && freshCount > 0){
            let len = q.size();
            for(let i=0;i<len;i++){
                let [row , col] = q.dequeue();
                for(let [dr,dc] of directions){
                    let ro = row + dr;
                    let co = col + dc;
                    if(ro < 0 || ro >=ROWS || co<0 || co>=COLM || grid[ro][co]!==1){
                        continue;
                    }
                    grid[ro][co] = 2;
                    q.push([ro,co]);
                    freshCount-=1;
                }
            }
            time+=1;
        }
        return freshCount===0 ? time : -1;
    }
}
