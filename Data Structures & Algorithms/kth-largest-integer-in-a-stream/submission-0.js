class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minheap = new MinPriorityQueue();
        this.k = k;
        for(let n of nums){
            this.minheap.enqueue(n);
        }
        while(this.minheap.size() > this.k){
            this.minheap.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
         this.minheap.enqueue(val);
         while(this.minheap.size() > this.k){
            this.minheap.dequeue();
         }
         return this.minheap.front();
    }
}
