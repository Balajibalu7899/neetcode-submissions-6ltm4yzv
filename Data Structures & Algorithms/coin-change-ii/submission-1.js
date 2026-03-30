class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(target, coins) {
        /**
         We need to find the Total number of combinations ? Main aim
         Base Case if(i goes out of bound we stop and return 0).
         if(we reach the current collected ammount is equal to target ammount we return 1)
         given coins are unique 
         we recursively iterate through the given array using index i
         track the collected ammount along with the current path
         at each step 
         we skip the current coin
         or
         we pick the current coin
         wnsuring the total  not exceeds the target 
         to allow picking the same coin multiple time
         we recurse with the multiple times with the same undex but updated ammount
         */
        let cache = new Map();
        function recurse(i,curamount){
            if(curamount===target){
             return 1;
           }
           if(i>=coins.length){
             return 0;
           }
           let key = `${i},${curamount}`;
           if(cache.has(key)) return cache.get(key);
           let include = 0;
             if(curamount + coins[i] <= target){
                 //we include 
                 include = recurse(i,curamount+coins[i]);
             }
                 //we skip it
            let exclude = recurse(i+1, curamount);
            cache.set(key, include+exclude);
           return include + exclude;
        }
     return recurse(0,0);
    }
}
