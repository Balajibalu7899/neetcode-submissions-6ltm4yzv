class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = [];
        this.sum = 0;
        for(let i=0; i<nums.length;i++){
          this.sum+=nums[i];
          this.prefix.push(this.sum);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.prefix[right] - (left > 0 ? this.prefix[left-1]:0);
    }
}
