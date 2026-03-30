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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
        }
        let i1 = head;
        let i2 = slow.next;
        slow.next = null;
        let prev = null;
        let next;
        while(i2){
            next = i2.next;
            i2.next = prev;
            prev = i2;
            i2 = next;
        }
       let nextnode;
       while(prev){
         nextnode = i1.next;
         i1.next = prev;
         i1 = prev;
         prev = prev.next;
         i1.next = nextnode;
         i1 = nextnode;
       }
    }
}
