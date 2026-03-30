/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Node{
    constructor(val = 0, next = null) {
         this.val = val;
       this.next = next;
    }
}

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let arr = [];
        for(let i=0; i<lists.length; i++){
           let temp = lists[i];
          while(temp){
            arr.push(temp);
            temp=temp.next;
          }
        }
        let newarr = arr.sort((a,b)=>a.val - b.val);
        let newlist = new Node(0);
        let i2 = newlist;
        for(let i = 0;i<newarr.length;i++){
            let node = new Node(newarr[i].val);
           i2.next = node;
           i2 = node;
        }
        return newlist.next;
    }
}
