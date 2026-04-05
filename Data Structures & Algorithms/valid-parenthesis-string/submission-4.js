class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let cache = new Map();
       function recursion(i,balance){
         if(i===s.length){
            return balance===0;
         }
         let key = `${i},${balance}`;
         if(cache.has(key)) return cache.get(key);
         if(balance < 0) return false;
         let res = false;

         if(s[i]==="("){
            res = recursion(i+1, balance + 1);
         }else if(s[i]===")"){
           res =  recursion(i+1,balance - 1);
         }else if(s[i]==="*"){
            res = (recursion(i+1, balance) || recursion(i+1, balance+1) || recursion(i+1, balance - 1));
         }
         cache.set(key, res);
         return res;
       }
       return recursion(0,0,0);
    }
}
