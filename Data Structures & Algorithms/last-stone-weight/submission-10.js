class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    constructor(){
        this.heap = new Array();
        this.heap.push(0);
    }
    leftchildIndex(index){
        if(2 * index < this.heap.length) return 2 * index;
    }
    rightchildIndex(index){
        if (2 * index + 1 < this.heap.length) return 2 * index + 1;
    }
    parentIndex(index){
       return Math.floor(index / 2);
    }
    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    maxIndex(leftIndex, rightIndex){
        if(leftIndex && rightIndex){
         return this.heap[leftIndex] > this.heap[rightIndex] ? leftIndex : rightIndex;
        }else{
            return leftIndex || rightIndex;
        }
    }
    push(val){
        this.heap.push(val);
        let i = this.heap.length - 1;
        while(i > 1 && this.heap[this.parentIndex(i)] < this.heap[i]){
            this.swap(i,this.parentIndex(i));
            i = this.parentIndex(i);
        }
    }
    pop(){
    if(this.heap.length <= 1) return;
    let ele = this.heap[1];
    if (this.heap.length === 2) {
        this.heap.pop();
        return ele;
    }
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let i = 1;
    while(true){
        let l = this.leftchildIndex(i);
        let r = this.rightchildIndex(i);
        let largest = i;
        if(l && this.heap[l] > this.heap[largest]){
            largest = l;
        }
        if(r && this.heap[r] > this.heap[largest]){
            largest = r;
        }
        if(largest !== i){
            this.swap(i, largest);
            i = largest;
        } else {
            break;
        }
    }
    return ele;
   }
    lastStoneWeight(stones) {
       if(stones.length<=0) return 0;
       for(let x of stones){
         this.push(x);
       }
       if(stones.length<=1) return this.heap[1] || 0;
       while(this.heap.length > 2){
         let x = this.pop();
         let y = this.pop();
         if(x===y){
            continue;
         }else if(x > y){
            this.push(x-y);
         }else if(x<y){
            this.push(y-x);
         }
       }
       return this.heap.length === 2 ? this.heap[1] : 0;
    }
}
