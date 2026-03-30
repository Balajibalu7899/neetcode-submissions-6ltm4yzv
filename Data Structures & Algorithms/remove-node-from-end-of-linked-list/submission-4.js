
// class ListNode {
// constructor(val = 0, next = null) {
// this.val = val;
//   this.next = next;
//   }
//  }

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(0, head);
        let right = head;
        let N = n;
        while(N > 0 && right){
            right = right.next;
            N -= 1;
        }
        let left = dummy;
        while(right){
            right = right.next;
            left = left.next;
        }
        left.next = left.next.next;
        return dummy.next;
    }
}
