class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let result = [];
        let colms = new Set();
        let pdia = new Set();// r+c
        let ndia = new Set();//r-c
        let board = Array.from({ length: n }, () => Array(n).fill('.'));

        function backtrack(row){
             if(row===n){
                result.push(board.map((ele)=>ele.join("")));
                 return;
             }
            for(let col=0;col<n;col++){
                if(colms.has(col) || pdia.has(row+col) || ndia.has(row-col)){
                    continue;
                }
                colms.add(col);
                pdia.add(row+col);
                ndia.add(row-col);
                board[row][col] = "Q";

                backtrack(row + 1);

                colms.delete(col);
                pdia.delete(row+col);
                ndia.delete(row-col);
                board[row][col] = ".";
            }
        }
        backtrack(0);
        return result;
    }
    
}
