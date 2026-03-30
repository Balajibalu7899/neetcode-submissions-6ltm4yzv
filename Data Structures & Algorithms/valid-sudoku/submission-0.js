class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let row=0;row<board.length;row++){
            let rowset = new Set();
            for(let col=0;col<board[row].length;col++){
               if(board[row][col]!=="."){
                    if(rowset.has(board[row][col])){
                        return false;
                    }else{
                        rowset.add(board[row][col]);
                    }
               }
            }
        }
        for(let col=0;col<board[0].length;col++){
             let colset = new Set();
            for(let row=0;row<board.length;row++){
                if(board[row][col]!=="."){
                    if(colset.has(board[row][col])){
                        return false;
                    }else{
                        colset.add(board[row][col]);
                    }
                }
            }
        }
        for(let square=0;square<9;square++){
            let squareSet = new Set();
            for(let i=0;i<=2;i++){
                for(let j=0;j<=2;j++){
                    let row = Math.floor((square/3))*3+i;
                    let col = (square%3) * 3 + j;
                    if(board[row][col]!=="."){
                        if(squareSet.has(board[row][col])){
                            return false;
                        }else{
                            squareSet.add(board[row][col]);
                        }
                    }
                }
            }
        }
        return true;

    }
}
