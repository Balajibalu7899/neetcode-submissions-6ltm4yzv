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
    diameterOfBinaryTree(root) {
     let glob = 0;
     function dfs(root){
       if(!root) return null;
       let leftH = dfs(root.left);
       let rightH = dfs(root.right);
       glob = Math.max(glob, leftH+rightH);
       return Math.max(leftH, rightH) + 1;
     }
     dfs(root);
     return glob;
    }
}
