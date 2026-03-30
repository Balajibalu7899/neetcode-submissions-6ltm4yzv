class MedianFinder {
    constructor() {
       this.minheap = new MinPriorityQueue();
       this.maxheap = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.maxheap.enqueue(num);
        this.minheap.enqueue(this.maxheap.dequeue());
         if(this.minheap.size() > this.maxheap.size()){
             this.maxheap.enqueue(this.minheap.dequeue());
          }
        if(this.maxheap.front() > this.minheap.front()){
            this.minheap.enqueue(this.maxheap.dequeue());
        }
        
    }

    /**
     * @return {number}
     */
    findMedian() {
      if(this.minheap.size() > this.maxheap.size()){
        return this.minheap.front();
      }else if (this.maxheap.size() > this.minheap.size()){
         return this.maxheap.front();
      }else{
        return (this.minheap.front() + this.maxheap.front()) / 2;
      }
    }
}
