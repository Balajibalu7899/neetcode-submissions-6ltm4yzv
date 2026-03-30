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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeList(list1,list2){
        let list = new ListNode();
        let i1 = list;
        while(list1 && list2){
            if(list1.val < list2.val){
                i1.next = list1;
                list1 = list1.next;
            }else{
                i1.next = list2;
                list2 = list2.next;
            }
           i1 = i1.next;
        }
        i1.next = list1 || list2;
        return list.next;
    }
    mergeKLists(lists) {
        if(lists.length  === 0){
            return null;
        }
       for(let i=1;i<lists.length;i++){
         lists[i] = this.mergeList(lists[i], lists[i-1]);
       }
       return lists[lists.length - 1];
    }
}
