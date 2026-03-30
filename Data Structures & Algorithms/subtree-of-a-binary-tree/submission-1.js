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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!root && subRoot){
            return false;
        }
        if(root && !subRoot){
            return true;
        }
        if(this.same(root,subRoot)){
            return true;
        }
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
        
       
    }
    same(r1,r2){
        if(!r1&&!r2){
            return true;
        }
        if((r1 && r2) && (r1.val===r2.val)){
            return this.same(r1.left,r2.left) && this.same(r1.right, r2.right);
        }
        return false;
    }
}
