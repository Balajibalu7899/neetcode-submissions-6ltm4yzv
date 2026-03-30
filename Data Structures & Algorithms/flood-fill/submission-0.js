class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        let ROWS = image.length;
        let COLM = image[0].length;
        let visited = new Set();
        let ogcolor = image[sr][sc];
        function dfs(r,c){
            if(r < 0 || c < 0 || r>=ROWS || c>=COLM || visited.has(`${r},${c}`) || image[r][c]!==ogcolor){
                return;
            }
            visited.add(`${r},${c}`);
            image[r][c] = color;
            let directions = [[1,0],[-1,0],[0,1],[0,-1]];
            for(let [dr, dc] of directions){
                let nr = r+dr;
                let nc = c+dc;
                if(!visited.has(`${nr},${nc}`)){
                    dfs(nr,nc);
                }
            }
        }
        dfs(sr,sc);
        return image;

    }
}
