class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length;
        let COLM = heights[0].length;
        let pacific = new Set();
        let atlantic = new Set();
        function dfs(r,c,visited){
            if(r <0 || c<0 || r>=ROWS || c>=COLM || visited.has(`${r},${c}`)){
                return;
            }
            visited.add(`${r},${c}`)
            let directions = [[1,0],[-1,0],[0,-1],[0,1]];
            for(let [dr, dc] of directions){
                let ro = r + dr;
                let co = c + dc;
                if(ro<0||co<0||ro>=ROWS||co>=COLM){
                    continue;
                }
                if(heights[ro][co] >= heights[r][c]){
                  dfs(ro, co,visited);
                }
                
            }

        }
        //for top row and leftmost colm;
        for(let r=0;r<ROWS;r++){
            dfs(r,0,pacific);
        }
        for(let c=0;c<COLM;c++){
            dfs(0,c,pacific);
        }
        //for bottom and rightmost colm
        for(let c=0;c<COLM;c++){
            dfs(ROWS-1,c,atlantic);
        }
        for(let r=0;r<ROWS;r++){
            dfs(r,COLM-1,atlantic);
        }
        let result = [];
        for(let r=0;r<ROWS;r++){
            for(let c=0;c<COLM;c++){
                let key = `${r},${c}`
                if(pacific.has(key) && atlantic.has(key)){
                    result.push([r,c]);
                }
            }
        }
        return result;
    }
}
