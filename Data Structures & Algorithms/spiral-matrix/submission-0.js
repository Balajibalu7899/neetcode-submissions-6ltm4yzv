class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
      let left = 0;
      let right = matrix[0].length;
      let top = 0;
      let bottom = matrix.length;
      let res = [];
      while(left < right && top < bottom){
         // Traverse from left to right:
         for(let i=left; i<right;i++){
          res.push(matrix[top][i]);
         }
         top++;
         //traverse from top to bottom
         for(let i=top; i<bottom; i++){
           res.push(matrix[i][right-1]);
         }
         right--;
         
          if(!(left < right && top < bottom)){
          break;
        }
        //traverse from right to left;
        for(let i=right-1;i>=left;i--){
          res.push(matrix[bottom - 1][i])
        }
        bottom--;
       
        //traverse from bottom to top
        for(let i=bottom-1;i>=top;i--){
          res.push(matrix[i][left])
        }
        left++;
      }
      return res;
    }
}
