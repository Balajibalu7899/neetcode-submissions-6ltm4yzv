class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        //to access ith bit of the number 
        //bit = (num >> i) & 1
        //to set the ith bit
        //num |= (1 << i)
        let res = 0;
        for(let i = 0; i < 32; i++){
            let bit = (n >> i) & 1;
            res = res | (bit << (31 - i));
        }
        return res >>> 0;
    }
}
