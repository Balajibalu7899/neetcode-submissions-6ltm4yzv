class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        let theSorted = hand.sort((a,b)=>a - b);
        let frequencyMap = new Map();
        for(let i = 0; i < hand.length; i++){
             if(frequencyMap.has(hand[i])){
               let x = frequencyMap.get(hand[i]);
               frequencyMap.set(hand[i],x+1);
             }else{
                frequencyMap.set(hand[i],1);
             }
        }
        for(let i=0;i<theSorted.length; i++){
            let start = theSorted[i];
            let end = start + groupSize;
            if(frequencyMap.get(start)>0){
                  for(let k=start;k<end;k++){
                if(frequencyMap.has(k)){
                    let x = frequencyMap.get(k);
                    frequencyMap.set(k,x-1);
                }else{
                    return false;
                }
            }
            }else{
                continue;
            }
            
        }
        return true;
    }
}
