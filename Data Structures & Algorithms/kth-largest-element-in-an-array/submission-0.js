class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxheap = new MaxPriorityQueue();
        nums.forEach((ele)=>maxheap.enqueue(ele));
        let i = 1;
        while(i < k ){
          maxheap.dequeue();
          i++;
        }
        return maxheap.front();
    }
}
