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
     * @return {number[]}
     */
    inorderTraversal(root,arr=[]) {
        if(!root) return arr;
        this.inorderTraversal(root.left,arr);
        arr.push(root.val);
        this.inorderTraversal(root.right,arr);  
        return arr;   
        }
}
