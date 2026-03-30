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
    isBalanced(root) {
        let isBalanced = true;
        function dfs(root){
            if(!root) return 0;
            let lh =  dfs(root.left);
            let rh = dfs(root.right);
            if(Math.abs(lh - rh) > 1){
                isBalanced = false;
            }
            return Math.max(lh,rh)+1;
        }
        dfs(root);
        return isBalanced;
    }
}
