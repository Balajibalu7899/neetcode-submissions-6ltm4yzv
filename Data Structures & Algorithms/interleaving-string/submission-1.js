class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        /**
         * if sum of characters of s1 and s2 does not equal to s3 we return false
         * recursively iterate through each string wising i and j and k for s1,s2,s3
         * At each step:
         * if(k goes out of the bound then we can return true) 
         *{ we explore in 2 directions: based on wether kth caracter of s3 matches the current character of
         *  s1 or s2 ==> if path returns true we immidetly return true
         * 
         * }
         */
        if(s1.length + s2.length !==s3.length) return false;
        let cache = new Map();
        function recursion(i,j,k){
            if(k>=s3.length) return true;
            //At a given step we have the 2 options:
            let key = `${i},${j},${k}`;
            if(cache.has(key)) return cache.get(key);
            if(s1[i]===s3[k] && s2[i]!==s3[k]){
               let res1 = recursion(i+1,j,k+1);
               cache.set(key, res1);
               return res1;
             }else if(s2[j]===s3[k]&&s1[i]!==s3[k]){
                let res2 = recursion(i,j+1,k+1);
                cache.set(key, res2);
                return res2;
            }else if(s1[i]===s3[k] && s2[i]===s3[k]){
                let res = recursion(i+1,j,k+1) || recursion(i,j+1,k+1);
                cache.set(key,res);
                return res;
            }
            return false;
        }
        return recursion(0,0,0);
    }
}
