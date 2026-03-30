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
    mergehelper(arr,l,r){
      if(r-l+1 <=1){
        return arr;
      }
     let mid = Math.floor((r+l)/2);
     this.mergehelper(arr, l, mid);
     this.mergehelper(arr, mid+1,r);
     this.merge(arr,l,mid,r);
      return arr;
    }
    merge(arr,l,m,r){
       let L = arr.slice(l,m+1);
       let R = arr.slice(m+1, r+1);
       let i1 = 0, i2=0;
       let i3 = l;
       while(i1<L.length && i2<R.length){
         if(L[i1].key <= R[i2].key){
            arr[i3] = L[i1];
            i1++;
         }else{
            arr[i3] = R[i2];
            i2++;
         }
         i3++;
       }
       while(i1 < L.length){
         arr[i3] = L[i1];
         i1++;
         i3++;
       }
       while(i2 < R.length){
        arr[i3] = R[i2];
        i2++;
        i3++;
       }
    }
    mergeSort(pairs) {
     return this.mergehelper(pairs, 0, pairs.length-1);
    }
    
}
