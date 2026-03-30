class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = Math.max(...piles);
        let left = 1, right = max;
        let result = right;
        while(left <= right){
            let mid = Math.floor(( right + left ) / 2);
            let sum = 0;
            for(let pile of piles){
                sum+=Math.ceil(pile / mid );
            }
            if(sum <= h){
                result = mid;
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        return result;
            }
}
