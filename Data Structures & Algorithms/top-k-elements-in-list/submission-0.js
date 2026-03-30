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
       let arr = Object.entries(frequency).sort((a,b)=>b[1]-a[1]);
       let arr2 = [];
       for(let i=0;i<k;i++){
        arr2.push(Number(arr[i][0]));
       }
       return arr2;
    }
}
