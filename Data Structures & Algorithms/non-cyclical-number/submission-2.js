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
      console.log("returning", sum);
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
        console.log("returned:",i)
       
        if(i===1){
          return true;
        }
      }
    }
}
