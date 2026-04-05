class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let openstack = [];
        let starstack = [];
        for(let i=0;i<s.length;i++){
            if(s[i]==="("){
                openstack.push(i);
            }else if(s[i]==="*"){
                starstack.push(i);
            }else if(s[i]===")"){
                if(openstack.length > 0){
                    openstack.pop();
                }else if(starstack.length > 0){
                    starstack.pop();
                } else if(starstack.length===0 && openstack.length===0){
                    return false;
                }
            }
        }
        while(openstack.length > 0 && starstack.length > 0){
            let x = openstack.pop();
            let y = starstack.pop();
           if(x > y){
             return false;
           }
        }
        return openstack.length===0 ? true : false;
    }
}
