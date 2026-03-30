class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let row=0; row<matrix.length;row++){
            for(let colum=0;colum<matrix[row].length; colum++){
                 if(matrix[row][colum]===target){
                    return true;
                 }
            }
        }
        return false;
    }
}
