/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let groupprev = dummy;
        while (true){
           let kth = this.findKthnode(groupprev, k);
           if(!kth){
            break;
           }
           let groupnext = kth.next;
           let prev = kth.next;
           let current = groupprev.next;
           while(current!==groupnext){
            const temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
           }
           const temp = groupprev.next;
           groupprev.next = kth;
           groupprev = temp;
        }
        return dummy.next;

    }
    findKthnode(current, k){
        while(current && k>0){
            current = current.next;
            k -= 1;
        }
        return current;
    }
}
