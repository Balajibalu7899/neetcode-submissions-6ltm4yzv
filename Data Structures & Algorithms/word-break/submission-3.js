class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let dp = new Array(s.length+1).fill(false);
        dp[s.length] = true;
        console.log(dp);
        for(let i=s.length - 1;i>=0;i--){
            console.log("\n Iteration:",i);
            for(let word of wordDict){
                console.log("Current Word:",word);
                console.log("Checking against:",s.slice(i,i+word.length));
                if((i+word.length <= s.length) && (s.slice(i,i+word.length)===word)){
                    console.log("Its true so accessing the dp[i+wordlength]",dp[i+word.length]);
                    dp[i] = dp[i+word.length];
                }
                if(dp[i]) break;
            }
        }
        return dp[0];
    }
}
