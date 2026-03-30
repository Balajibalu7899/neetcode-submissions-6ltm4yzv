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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum,sum=0) {
        if(!root) return false;
        sum += root.val;
        if(!root.left && !root.right){
            if(sum===targetSum) return true;
            else return false;
        }
        let l = this.hasPathSum(root.left, targetSum,sum);
        let r = this.hasPathSum(root.right, targetSum,sum);
        sum-=root.val;
        return l || r;
    }
}
