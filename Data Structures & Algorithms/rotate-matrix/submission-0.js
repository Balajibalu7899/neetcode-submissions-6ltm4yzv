class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
      let left = 0;
      let right = matrix[0].length - 1;
      while(left < right){
        for(let i=0; i < right - left; i++){
          let top = left;
          let bottom = right;
          //top left
          let topLeft = matrix[top][left+i];
          //topleft
          matrix[top][left + i] = matrix[bottom - i][left]
          //bottom left
          matrix[bottom - i][left] = matrix[bottom][right - i];
          //bottom right
          matrix[bottom][right - i] = matrix[top+i][right];
          //top right
          matrix[top+i][right] = topLeft;
        }
        left++;
        right--;
      }
    }
}
