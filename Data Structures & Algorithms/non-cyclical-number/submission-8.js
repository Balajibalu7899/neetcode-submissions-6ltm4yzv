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
      let slow = n;
      let fast = this.helper(n);
      while(slow!==fast){
        fast = this.helper(fast);
        fast = this.helper(fast);
        slow = this.helper(slow);
      }
      return fast===1;
    }
}
