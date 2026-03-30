class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowsMap = new Map();
        let columsMap = new Map();
        let squaresMap = new Map();
        for(let r=0 ; r<9;r++){
            for(let c=0;c<9;c++){
               if(board[r][c]===".") continue;
               let squareKey = `${Math.floor(r/3)},${Math.floor(c/3)}`
               if(rowsMap.get(r) && rowsMap.get(r).has(board[r][c])|| columsMap.get(c) && columsMap.get(c).has(board[r][c]) || squaresMap.get(squareKey) && squaresMap.get(squareKey).has(board[r][c]) ){
                return false;
               }
               if(!rowsMap.has(r)) rowsMap.set(r, new Set());
               if(!columsMap.has(c)) columsMap.set(c, new Set());
               if(!squaresMap.has(squareKey)) squaresMap.set(squareKey, new Set());
               rowsMap.get(r).add(board[r][c]);
               columsMap.get(c).add(board[r][c]);
               squaresMap.get(squareKey).add(board[r][c]);
             }
        }
      return true;
    }
}
