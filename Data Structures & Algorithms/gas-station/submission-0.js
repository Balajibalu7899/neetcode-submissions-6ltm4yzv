class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
      let sum = 0;
      for(let i=0;i<gas.length;i++){
        sum +=gas[i];
      }
      let sum2 = 0;
      for(let j=0;j<cost.length;j++){
        sum2+=cost[j];
      }
      if(sum < sum2) return -1;
      let total = 0;
      let startIndex = 0;
      for(let i=0; i < gas.length; i++){
        total = total + (gas[i] - cost[i]);
        if(total < 0){
            total = 0;
            startIndex = i + 1;
        }
      }
      return startIndex;
    }
}
