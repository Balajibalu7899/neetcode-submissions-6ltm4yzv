class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
      let visited = new Set();
      let ROWS = board.length;
      let COLM = board[0].length;
       function dfs(r,c,current){
        if(r<0||c<0||r>=ROWS||c>=COLM||visited.has(`${r},${c}`)) return false;
         current.push(board[r][c]);
        visited.add(`${r},${c}`);
        if(current.join("")===word){
            return true;
        }
        if(dfs(r-1,c,current)) return true;
       if(dfs(r+1,c,current)) return true;
       if(dfs(r,c-1,current)) return true;
        if(dfs(r,c+1,current)) return true;
        current.pop();
        visited.delete(`${r},${c}`);
        return false;
       } 
       for(let i=0;i<ROWS;i++){
        for(let j=0; j<COLM; j++){
            if(board[i][j]===word[0]){
                if(dfs(i,j,[])) return true;
            }
        }
       }
       return false;
    }
}
