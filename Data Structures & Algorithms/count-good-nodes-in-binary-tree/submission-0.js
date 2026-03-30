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
    constructor(){
        this.count=0;
    }
    goodNodes(root,currentMax=-Infinity) {
      if(!root) return this.count;
      if(root.val >= currentMax){
         this.count+=1;
         currentMax = root.val;
      }
      this.goodNodes(root.left, currentMax);
      this.goodNodes(root.right, currentMax);
      return this.count;
    }
    
}

