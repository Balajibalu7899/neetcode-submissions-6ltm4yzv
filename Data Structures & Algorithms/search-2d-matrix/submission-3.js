class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    search(arr,target){
        let l = 0, r=arr.length;
        while(l <= r){
          let mid = Math.floor((r + l) / 2);
          if(arr[mid]===target){
             return true;
          }else if(target > arr[mid]){
             l = mid + 1;
          }else{
            r = mid - 1;
          }
        }
        return false;
    }
    searchMatrix(matrix, target) {
        let l = 0, r=matrix.length-1;
        while(l <= r){
          let mid = Math.floor((r+l)/2);
          if(matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1]>=target){
            return this.search(matrix[mid],target);
          }else if(target > matrix[mid][matrix[mid].length - 1]){
            l = mid + 1;
          }else{
            r = mid - 1;
          }
        }
        return false;
    }
}
