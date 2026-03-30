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
     * @return {boolean}
    */
    isValidBST(root) {
       return this.helper(root,[Infinity, -Infinity]);
    }
    helper(root,[max,min]){
        if(!root) return true;
        if(root.val < max && root.val > min){
            return this.helper(root.left,[root.val, min]) && this.helper(root.right,[max,root.val]);
        }
    return false;
    }
}
