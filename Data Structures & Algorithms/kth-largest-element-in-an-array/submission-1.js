class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const minheap = new MinPriorityQueue();
        for(let val of nums){
            minheap.enqueue(val);
            if(minheap.size() > k){
                minheap.dequeue();
            }
        }
        return minheap.front();
    }
}
