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
       let st2= str.split("").reverse().join("");
       if(st2===str){
        return true;
       }else{
        return false;
       }
    }
}
