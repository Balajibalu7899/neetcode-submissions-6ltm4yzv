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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let list = new ListNode(0);
        let i1 = list;
        let carry = 0;
        while(l1 || l2){
            let a = l1 ? l1.val:0;
            let b = l2 ? l2.val:0;
            let sum = a + b + carry;
            let num = sum % 10;
            carry = Math.floor(sum/10);
            let newnode = new ListNode(num,null);
            i1.next = newnode;
            i1 = newnode;
            if(l1){
                l1 = l1.next;
            }
            if(l2){
                l2 = l2.next;
            }
        }
        if(carry > 0){
            let newN = new ListNode(carry,null);
            i1.next = newN;
        }
        return list.next;
    }
}
