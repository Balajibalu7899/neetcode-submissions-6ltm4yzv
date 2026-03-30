class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let final = [];
        let sortedarray = nums.sort((a,b)=>a-b);
            for(let i=0;i<sortedarray.length;i++){
                if(nums[i]===nums[i-1]){
                    continue;
                }else{
                let target = - sortedarray[i];
                let l=i+1;
                let r=sortedarray.length-1;
                while(l < r){
                    let sum=sortedarray[l]+sortedarray[r]
                    if(sum===target){
                        final.push([sortedarray[i],sortedarray[l],sortedarray[r]]);
                      while (l < r && sortedarray[l] === sortedarray[l + 1]) l++;
                      while (l < r && sortedarray[r] === sortedarray[r - 1]) r--;
                      l++;
                      r--;
                    }else if(sum>target){
                        r--;
                    }else if(sum<target){
                        l++;
                    }
                }
                }
            }
            return final;
    }
}
