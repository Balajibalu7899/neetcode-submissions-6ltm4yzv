class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       let str="";
       for(let i=0;i<s.length;i++){
        let regex =/^[a-zA-Z0-9]+$/;
        if(regex.test(s[i])){
            str+=s[i].toLocaleLowerCase();
        }
       }
       let p1 = 0;
       let p2 = str.length-1;
       while(p1<str.length && p2>=0){
        if(str[p1]===str[p2]){
            p1+=1;
            p2-=1;
        }else{
            return false;
        }
       }
       return true;
    }
}
