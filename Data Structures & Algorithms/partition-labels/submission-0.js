class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        /*
        Constraints: A character have the first and last index in the string
        we store the last index of the each character in the hash map
        iterate through the string by treating each index as start of the partition
        we track the end of the partition using the maximum last index of the
        (characters seen so far in the current partition) Aditionally we maintain the size of the patrtition 
        using var size

        we update end of current partition based on the maximum last index of the characters,
        when current index eches the partion end we finilize the partition append  
         */
        let hashmap = new Map();
        let arr = [];
        for(let i=0;i<S.length;i++){
              hashmap.set(S[i],i);
        }
        let size = 0;
        let maxindex = 0;
        for(let i=0;i<S.length;i++){
            size = size + 1;
            maxindex = Math.max(maxindex, hashmap.get(S[i]));
            if(maxindex===i){
                arr.push(size);
                size = 0;
                maxindex = 0;
            }
        }
        return arr;
    }
}
