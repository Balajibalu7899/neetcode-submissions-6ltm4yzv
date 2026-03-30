class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
     let cache = new Array(amount + 1).fill(-1);
     function dfs(ammount){
        if(ammount===0){
            return 0;
        }
        if(cache[ammount]!==-1) return cache[ammount];
        let res = Infinity;
        //include
        for(let coin of coins){
            if(ammount - coin >=0){
             let x = 1 + dfs(ammount - coin);
             res = Math.min(res , x);
            }
              
        }
        cache[ammount] = res;
        return res;
     }
     let df = dfs(amount);
     return df !==Infinity ? df : -1;
    }
}
