class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequency = {};
        for( let n of nums){
            if(frequency[n]){
                frequency[n]+=1;
            }else{
                frequency[n]=1;
            }
        }
      const freq = Array.from({ length: nums.length + 1 }, () => []);
      for(let [key , value] of Object.entries(frequency)){
        freq[value].push(parseInt(key));
      }
      let result = [];
      for(let i=freq.length-1;i>0;i--){
        for(let n of freq[i]){
            result.push(n);
            if(result.length===k){
                return result;
            }
        }
      }
    }
}
