class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minheap = new MinPriorityQueue((item) => item.dist)
        for(let point of points){
            let d = (point[0] ** 2) + (point[1]**2);
            minheap.enqueue({dist: d, p: point});
        }
        let res = [];
        while(k > 0){
            res.push(minheap.dequeue().p)
            k--;
        }
        return res;
    }
}
