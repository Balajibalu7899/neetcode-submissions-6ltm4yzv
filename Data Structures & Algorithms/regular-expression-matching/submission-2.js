class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    /*
    . single * many
    i and j doe s and p 
    s[i]===p[j] or p[j]==="." we increment the i+1,j+1
    if p[j]===* 2  chices 
    //skip treting sero occurences 
    //match one or more occurences increment i value 
    if both goes out of bound we return true other wise false 
    if any recursive path return true we immediatly return true 
     */
    isMatch(s, p) {
        let cache = new Map();
        function dfs(i,j){
            let key = `${i},${j}`;
             if(cache.has(key)) return cache.get(key);
            if(i>=s.length && j>=p.length) return true;
            if(j>=p.length) return false;
           
            let matchPrev = (i < s.length && (s[i]===p[j] || p[j]==="."));
            if(j+1 < p.length && p[j+1]==="*"){
               let res = dfs(i,j+2) || (matchPrev && dfs(i+1,j));
               cache.set(key,res);
               return res;
            }
            if(matchPrev){
                let res = dfs(i+1,j+1);
                cache.set(key, res);
                return res;
            }
           cache.set(key,false);
           return false;
        }
     return dfs(0,0);
       
    }
}
