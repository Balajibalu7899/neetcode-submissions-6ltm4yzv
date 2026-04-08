class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
      let ROWS = matrix.length;
      let COLM = matrix[0].length;
      let firstrowfirstcell = false;
      let firstcolmfirstcell = false;
      for(let r=0; r < ROWS; r++){
        for(let c=0; c < COLM; c++){
           if(matrix[r][c]===0){
            if(r===0) firstrowfirstcell = true;
            if(c==0) firstcolmfirstcell = true;
              matrix[0][c] = 0;
              matrix[r][0] = 0;
           }
        }
      }
      for(let r=1; r < ROWS; r++){
        for(let c=1; c < COLM; c++){                 
           if(matrix[0][c] === 0 || matrix[r][0]===0){
            matrix[r][c] = 0;
           }
        }
      }
      if(firstcolmfirstcell){
        for(let i=0;i<ROWS;i++){
          matrix[i][0]=0;
        
      }
      }
      if(firstrowfirstcell){
         for(let i=0;i<COLM;i++){
          matrix[0][i]=0;
        
      }
      }
    }
}
