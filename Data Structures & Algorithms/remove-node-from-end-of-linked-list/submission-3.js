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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length = 0;
        let i1 = head;
        while(i1){
            length++;
            i1 = i1.next;
        }
       let index = length-n < 0?0:length-n;
       let curindex = 0;
       let slow = head;
       let prev = null;
       if(length===1){
         return null;
       }
       while(slow){
        if(index===0){
            head = head.next;
            break;
        }
         if(curindex===index){
            prev.next = slow.next;
            break;
         }
         prev = slow;
         slow = slow.next;
         curindex++;
       }
       return head;
    }
}
