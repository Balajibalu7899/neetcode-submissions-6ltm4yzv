class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    constructor(){
        this.hashmap = new Map();
    }
    climbStairs(n) {
        if(n==0||n==1) return 1;
        if(this.hashmap.has(n)){
            return this.hashmap.get(n);
        }else{
          let x =   this.climbStairs(n - 1) + this.climbStairs(n-2);
          this.hashmap.set(n, x);
          return x;
        }
      
    }
}
