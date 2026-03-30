/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root){
            return [];
        }
        const q = new Queue();
        let arr =[];
        q.enqueue(root);
        let level = 0;
        while(q.size()>0){
          let levelLength = q.size();
          let sub =[];
          for(let i=0;i<levelLength;i++){
            let current = q.dequeue();
            sub.push(current.val);
            if(current.left){
              q.enqueue(current.left);
            }
            if(current.right){  
              q.enqueue(current.right);
            }
          }
          level+=1;
          arr.push(sub);
        }
        return arr;
    }
}
