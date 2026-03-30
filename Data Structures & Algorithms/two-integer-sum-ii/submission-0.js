class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let hashmap = new Map();
        for(let i=0;i<numbers.length;i++){
            if(!hashmap.has(numbers[i])){
                hashmap.set(numbers[i],i);
            }else {continue};
        }
        for(let i=0;i<numbers.length;i++){
          if(hashmap.has(target-numbers[i])&&i!==hashmap.get(target-numbers[i])){
            if(i<hashmap.get(target-numbers[i])){
                return [i+1,hashmap.get(target-numbers[i])+1]
            }
          }
        }
    }
}
