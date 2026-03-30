class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length;
     let result = new Array(n).fill(0);
     let stack = [temperatures[0]];
     let indexstack =[0];
     for(let i=1; i<temperatures.length; i++){
         while(temperatures[i] > stack[stack.length-1]){
          let index = indexstack.pop();
          let days = i - index;
          result[index] = days;
          stack.pop();
         }
         stack.push(temperatures[i]);
         indexstack.push(i);
     }
     return result;
    }
}
