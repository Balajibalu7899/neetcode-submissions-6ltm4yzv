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
        this.maxsum = -Infinity;
    }
    maxPathSum(root){
       this.helper(root);
       return this.maxsum;
    }
    helper(root,sum=0) {
      if(!root) return 0;
      let leftMax =Math.max(0, this.helper(root.left, sum));
      let rightMax = Math.max(0,this.helper(root.right,sum));
      let addi = root.val+leftMax+rightMax;
      this.maxsum = Math.max(this.maxsum, addi);
      return root.val + Math.max(leftMax, rightMax);
    }
}
