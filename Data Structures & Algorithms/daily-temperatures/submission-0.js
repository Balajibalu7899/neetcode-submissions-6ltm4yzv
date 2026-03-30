class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
     let result = [];
     for(let i=0; i<temperatures.length; i++){
        let j=i+1;
        let count = 1;
        while(j<temperatures.length){
           if(temperatures[j] > temperatures[i]){
            break;
           }
          j++;
          count++;
        }
        count = j === temperatures.length ? 0:count;
        result.push(count);
     }
     return result;
    }
}
