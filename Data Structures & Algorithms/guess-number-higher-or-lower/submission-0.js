/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        console.log("number:",n)
        let start = 0;
        let end = n;
        while(start <= end){
            let med = Math.floor((end+start)/2);
            let g = guess(med);
            if(g===0){
                return med;
            }else if(g===-1){
                end = med - 1;
            }else {
                start = med + 1;
            }
        }
    }
}
