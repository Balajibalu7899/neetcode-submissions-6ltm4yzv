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
        //converting the number to unsigned integer because in the
        // 32 bit the firt bit is for the 0-> positive and 1-negative
        //making res >>> 0 means right shift 0 times but treate the number as positive
        return res>>>0;
    }
}
