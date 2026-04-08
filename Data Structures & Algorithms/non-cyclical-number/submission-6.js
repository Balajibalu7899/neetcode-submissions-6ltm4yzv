class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    helper(number){
      let x = number.toString().split("");
      let sum = 0;
      for(let i=0;i<x.length;i++){
        sum+=(Math.pow(parseInt(x[i]),2));
      }
      return sum;
    }
    isHappy(n) {
      let i = n;
      let processed = new Set();
      while(true){
        if(processed.has(i)){
           return false;
        } else {
            processed.add(i);
        }
        i = this.helper(i);
        if(i===1){
          return true;
        }
      }
    }
}
