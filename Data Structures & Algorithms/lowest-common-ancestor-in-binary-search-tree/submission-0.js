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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
       return this.helperFunc(root,p,q);
    }
   helperFunc(node, p, q){
    if(!node){ return null }
    if(node.val===p.val||node.val===q.val){
        return node;
    }
    if(p.val < node.val && q.val > node.val){
        return node;
    }
    if(p.val > node.val && q.val < node.val){
        return node;
    }
    if(p.val > node.val && q.val > node.val){
       return  this.helperFunc(node.right, p,q);
    }else if(p.val < node.val && q.val < node.val){
        return this.helperFunc(node.left, p, q);
    }
   }
}
