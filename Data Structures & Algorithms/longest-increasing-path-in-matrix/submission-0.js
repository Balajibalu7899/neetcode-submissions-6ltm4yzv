class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
      /*
        Each integer is >= 0
        return Return the length of longest path within matrix
       For Each Cell:
      can move virtically or Horizantally but not diagnolly

      */
      let ROWS = matrix.length;
      let COLM = matrix[0].length;
      let maxLength = 0;
      let memo = new Map();
      function dfs(r,c){
        if(r <0 || c<0 || r>=ROWS || c>=COLM ){
            return 0;
        }
        if(memo.has(`${r},${c}`)) return memo.get(`${r},${c}`);
        let directions = [[1,0],[-1,0],[0,1],[0,-1]];
        let res = 1;
        for(let [dr,dc] of directions){
          let nr = r + dr;
          let nc = c + dc;
          if(nr >=0 && nc>=0 && nr<ROWS && nc<COLM && matrix[nr][nc] > matrix[r][c]){
             res = Math.max( res, 1+dfs(nr,nc));
          }
        }
        memo.set(`${r},${c}`,res);
        return res;
      }
      for(let r =0; r<ROWS; r++){
        for(let c=0;c<COLM;c++){
           maxLength = Math.max(maxLength,dfs(r,c));
        }
      }
      return maxLength;
    }
}
