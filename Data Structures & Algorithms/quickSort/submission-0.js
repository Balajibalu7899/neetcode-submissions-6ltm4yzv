/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    quickSort(pairs) {
        this.quickort(pairs,0,pairs.length-1);
        return pairs;
    }
    quickort(arr, start, end){
        if(end - start + 1 <= 1){
            return arr;
        }
        let i = start;
        let pivot = arr[end];
        for(let j=start; j<end; j++){
            if(arr[j].key < pivot.key){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
            }
        }
        arr[end] = arr[i];
        arr[i] = pivot;
        this.quickort(arr, start, i-1);
        this.quickort(arr, i+1, end);
    }
}
