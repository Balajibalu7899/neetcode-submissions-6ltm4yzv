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
     let maxDiameter = 0;
     function helper(node){
        if(node===null){
            return -1;
        }
        let leftH = helper(node.left);
        let rightH = helper(node.right);
        maxDiameter = Math.max(maxDiameter,leftH + rightH+2);
        return Math.max(leftH ,rightH) + 1;
     }
     helper(root);
     return maxDiameter;
    }
}
