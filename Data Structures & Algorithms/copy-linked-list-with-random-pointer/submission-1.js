// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let hashMap = new Map();
        let left = head;
        while(left){
            let newNode = new Node(left.val, left.next, null);
            hashMap.set(left, newNode);
            left = left.next;
        }
       let head2 = new Node(0);
       let itehead2 = head2;
       let i1 = head;
       while(i1){
         let node = hashMap.get(i1);
         node.random = hashMap.get(i1.random);
         itehead2.next = node;
         itehead2 = node;
         i1 = i1.next;
       }
       return head2.next;
        
    }
}
