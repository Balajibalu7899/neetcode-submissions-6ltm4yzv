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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let head = new ListNode();
        let i3 = head;
        let i1 = list1;
        let i2 = list2
        while(i1 && i2){
            if(i1.val < i2.val){
               i3.next = i1;
               i3 = i1;
               i1 = i1.next;
            }else if(i1.val > i2.val){
              i3.next = i2;
              i3 = i2;
              i2 = i2.next;
            }else if(i1.val === i2.val){
                i3.next = i1;
                i3 = i1;
                i1 = i1.next;
                i3.next = i2;
                i3 = i2;
                i2 = i2.next;
            }
            i3.next = null;
        }
        if(i1){
            i3.next = i1;
        }else{
            i3.next = i2;
        }
        return head.next;
    }
}
