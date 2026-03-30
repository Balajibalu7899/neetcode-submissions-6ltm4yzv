class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        let ROWS = grid.length;
        let COLM = grid[0].length;
        let minheap = new PriorityQueue((a,b)=>a[0]-b[0]);
        minheap.enqueue([grid[0][0],0,0]);
        let visited = new Set();
        while(!minheap.isEmpty()){
            let [ch, cr,cc] = minheap.dequeue();
            if(cr === ROWS - 1 && cc===COLM-1){
                return ch;
            }
            let directions = [[1,0],[-1,0],[0,1],[0,-1]];
            for(let [nr, nc] of directions){
                let dr = cr + nr;
                let dc = cc + nc;
                if(dr < 0 || dc < 0 || dr >= ROWS || dc >= COLM || visited.has(`${dr},${dc}`)){
                    continue;
                }
                visited.add(`${dr},${dc}`);
                minheap.enqueue([Math.max(ch, grid[dr][dc]), dr, dc]);
            } 
        }
    }
}
