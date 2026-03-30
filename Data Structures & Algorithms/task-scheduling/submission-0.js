class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let map = new Map();
        tasks.forEach((ele)=>map.set(ele,map.get(ele)+1 || 1));
        let maxheap = new MaxPriorityQueue();
        for(let val of map.values()){
            maxheap.enqueue(val);
        }
        let time = 0;
        let q = new Queue();
        while(maxheap.size() > 0 || q.size() > 0){
             time+=1;
             let x;
            if(maxheap.size() > 0){
               x = maxheap.dequeue();
               if(x && x-1>0){
                q.enqueue([x-1,time+n]);
              }
            }
            if(q.size() > 0 && q.front()[1]===time){
                maxheap.enqueue(q.dequeue()[0]);
            }
        }
        return time;
    }
}
