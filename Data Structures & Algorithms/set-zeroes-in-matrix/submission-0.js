class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
      let ROWS = matrix.length;
      let COLM = matrix[0].length;
      let rowbool = Array.from(ROWS).fill(false);
      let colmool = Array.from(COLM).fill(false);
      for(let r=0; r < ROWS; r++){
        for(let c=0; c < COLM; c++){
           if(matrix[r][c]===0){
              rowbool[r]=true;
              colmool[c] = true;
           }
        }
      }
      console.log(rowbool);
      console.log(colmool);
      for(let r=0; r < ROWS; r++){
        for(let c=0; c < COLM; c++){
           if(rowbool[r] === true || colmool[c]===true){
            matrix[r][c] = 0;
           }
        }
      }
      
    }
}
