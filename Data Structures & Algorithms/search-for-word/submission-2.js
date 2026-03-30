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

      function backtrack(r,c,current){
         if(r<0||c<0||r>=ROWS||c>=COLM||visited.has(`${r},${c}`)) return;
         current.push(board[r][c]);
         visited.add(`${r},${c}`);
         if(current.join("")===word){
            return true;
         }
         if(word.startsWith(current.join("")) && (backtrack(r+1, c,current) || backtrack(r-1,c,current) || backtrack(r,c+1,current) || backtrack(r,c-1,current))){
            return true;
         }
         visited.delete(`${r},${c}`);
         current.pop();
         return false;
      }
      for(let r=0;r<ROWS;r++ ){
        for(let c=0;c<COLM;c++){
            if(board[r][c]===word[0]){
                if(backtrack(r,c,[])) return true;
            }
        }
      }
      return false;
    }
}
