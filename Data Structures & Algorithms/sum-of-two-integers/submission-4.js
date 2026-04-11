class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        let res = 0;
        let carry = 0;
        for(let i=0;i<32;i++){
            let b1 = ((a >> i) & 1);
            let b2 = ((b >> i) & 1);
            let bit =  b1^b2^carry;
            carry = (b1&b2) || (b1&carry) ||  (b2&carry);
            res |= (bit << i);
        }
        return res
    }
}
