class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    helper(number){
      let sum = 0;
      while(number > 0){
        let digit = number % 10;
        digit = Math.pow(digit, 2);
        sum+=digit;
        number = Math.floor( number / 10);
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
