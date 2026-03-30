class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let maxvalue = Math.max(...piles);
        console.log("Max pile size is:",maxvalue);
        let k=1;
        while(true){
            let sum = 0;
            for(let pile of piles){
                sum+=Math.ceil(pile / k);
            }
            if(sum <=h){
                break;
            }
            k=k+1;
        }
        return k;
    }
}
