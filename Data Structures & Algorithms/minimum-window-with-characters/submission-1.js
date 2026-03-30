class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
  
    minWindow(s, t) {
        if(t==='') return '';
          let needhash = new Map();
          for(let c of t){
            needhash.set(c, 1 + (needhash.get(c)||0));
          } 
         let need = needhash.size;
         let have = 0;
         let index=[-1,-1];
         let length = Number.POSITIVE_INFINITY;
         let havehash = new Map();
         let left = 0;
         for(let right=0; right<s.length; right++){
              havehash.set(s[right],1+ (havehash.get(s[right]) || 0));
              if(needhash.has(s[right]) && havehash.get(s[right])===needhash.get(s[right])){
                 have++;
              }
              while(have===need){
                if((right - left + 1) < length){
                    index = [left, right];
                    length = right - left + 1;
                }
                havehash.set(s[left], havehash.get(s[left]) - 1);
                if(needhash.has(s[left]) && havehash.get(s[left]) < needhash.get(s[left])){
                   have--;
                }
                left++;
              }
         }
         return length<Number.POSITIVE_INFINITY ? s.substring(index[0],index[1] + 1):"";
           
    }
}
