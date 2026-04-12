class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        let ROWS = grid.length;
        let COLM = grid[0].length;
        const q = new Queue();
        if(grid[0][0]===1) return -1;
        q.enqueue([0,0]);
        let level = 0;
        let visited = new Set();
        visited.add(`${0},${0}`);
        while(!q.isEmpty()){
            let length = q.size();
            for(let i=0;i<length;i++){
                let [r, c] = q.dequeue();
                if(r===ROWS-1 && c===COLM-1) return level;
                let directions = [[1,0],[-1,0],[0,1],[0,-1]];
                for(let [dr, dc] of directions){
                    let nr = r + dr;
                    let nc = c + dc;
                    if(nr < 0 || nc < 0 || nr>=ROWS || nc>=COLM || grid[nr][nc]===1 || visited.has(`${nr},${nc}`)){
                        continue;
                    }else{
                        q.enqueue([nr,nc]);
                        visited.add(`${nr},${nc}`);
                    }
                }
            }
            level++;
        }
        return -1;
    }
}
