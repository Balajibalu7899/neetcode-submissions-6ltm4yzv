class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    helper(number){
      let x = number.toString().split("");
      let sum = 0;
      for(let i=0;i<x.length;i++){
        let ele = parseInt(x[i])
        sum+=(Math.pow(ele,2));
      }
      return sum;
    }
    isHappy(n) {
      let processed = new Set();
      while(true){
        if(processed.has(n)){
           return false;
        } else {
            processed.add(n);
        }
        n = this.helper(n);
        if(n===1){
          return true;
        }
      }
    }
}
