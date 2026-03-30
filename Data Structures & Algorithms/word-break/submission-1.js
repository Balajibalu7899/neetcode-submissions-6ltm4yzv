class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let dp = new Array(s.length+1).fill(-1);
        function dfs(i){
            console.log("\n Iteration:",i);
            if(i===s.length){
                return true;
            }
            if(dp[i]!==-1) return dp[i];
            for(let word of wordDict){
                console.log("Current word is:",word,"Checking against:",s.slice(i,i+word.length),"if:",word===s.slice(i,i+word.length));
                if(s.slice(i,i+word.length)===word){
                    let output = dfs(i+word.length);
                    dp[i+word.length] = output;
                    if(output) return true; 
                }
            }
            return false;
        }
        return dfs(0);
    }
}
