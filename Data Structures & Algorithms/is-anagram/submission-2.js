class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length){
            return false;
        }
        let firstHash = {};
        let secondHash = {};
        for(let i=0;i<s.length;i++){
            firstHash[s[i]] = (firstHash[s[i]] || 0) + 1;
            secondHash[t[i]] = (secondHash[t[i]] || 0) + 1;
        }
        for(let [key , value ] of Object.entries(firstHash)){
            console.log(key,value,"second hash value",secondHash[key])
            if(secondHash[key]!==value||secondHash[key]===undefined){
               return false;
            }
        }
        return true;
    }
}
