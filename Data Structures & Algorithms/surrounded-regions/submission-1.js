class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
       let ROWS = board.length;
       let COLM = board[0].length;
       let visited = new Set();
       function dfs(r,c){
         if(visited.has(`${r},${c}`) || board[r][c]==='X'){
             return;
         }
         visited.add(`${r},${c}`);
         board[r][c] = '#';
         let directions = [[1,0],[-1,0],[0,1],[0,-1]];
         for(let [dr,dc] of directions){
            let ro = r+dr;
            let co = c+dc;
            if(ro<0||ro>=ROWS||co<0||co>=COLM){
                continue;
            }
            dfs(ro,co);
         }
       }
       //left column;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLM; c++) {
                // Check if it's a border cell AND it's 'O'
                if ((r === 0 || c === 0 || r === ROWS - 1 || c === COLM - 1) && 
                    board[r][c] === 'O') {
                    dfs(r, c);
                }
            }
        }
       for(let r=0;r<ROWS;r++){
        for(let c=0;c<COLM;c++){
            if(board[r][c]==='O'){
                board[r][c]='X';
            }else if(board[r][c]==='#'){
                board[r][c]='O';
            }
        }
       }
    }
}
