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
     * @return {number}
     */
    
    maxDepth(root) {
        let level = 0;
      if(!root){
        return level;
      }
      
      let Q = new Queue();
      Q.enqueue(root);
      while(Q.size()>0){
        let levelLength = Q.size();
        for(let i=0;i<levelLength;i++){
          const node = Q.dequeue();
          if(node.left){
            Q.enqueue(node.left);
          }
          if(node.right){
            Q.enqueue(node.right);
          }
        }
        level+=1;
      }
       return level;
    }
   
}
