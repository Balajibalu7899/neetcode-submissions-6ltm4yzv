class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
         if(grid[0][0]===1){
            return -1;
        }
        let ROWS = grid.length;
        let COLM = grid[0].length;
        let visited = new Set();
        let q = new Queue();
        q.enqueue([0,0]);
        visited.add(`${0},${0}`);
        let l = 1;
        while(q.size()){
            let length = q.size();
            for(let i=0;i<length; i++){
                let [row, col] = q.dequeue();
                if(row === ROWS-1 && col === COLM - 1){
                    return l;
                }
                let directions = [[1,0],[-1,0],[0,1],[0,-1],[1,-1],[1,1],[-1,-1],[-1,1]];
                for(let [dr , dc] of directions){
                    let r = row + dr;
                    let c = col + dc;
                    if(r<0 || r>=ROWS || c<0 || c>=COLM || visited.has(`${r},${c}`)||grid[r][c]===1){
                        continue;
                    }
                    q.enqueue([r,c]);
                    visited.add(`${r},${c}`);
                }

            }
            l+=1;
        }
        return -1;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    }
}
