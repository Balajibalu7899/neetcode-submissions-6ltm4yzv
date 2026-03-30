class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = {};
        for(let str of strs){
         let count = new Array(26).fill(0);
         for(let character of str){
            count[character.charCodeAt(0) - 'a'.charCodeAt(0)]++;
         }
         let key = count.join(",");
         if(!hashMap[key]){
            hashMap[key] = [];
         }
         hashMap[key].push(str);
        }
        return(Object.values(hashMap));
    }
}
