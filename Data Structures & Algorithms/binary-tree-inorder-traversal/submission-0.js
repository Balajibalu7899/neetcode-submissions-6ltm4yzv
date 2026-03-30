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
    inorderTraversal(root) {
        return this.dfs(root,[])    
        }
    dfs(root,arr){
        if(!root) return arr;
        this.dfs(root.left,arr);
        arr.push(root.val);
        this.dfs(root.right,arr);  
        return arr;
    }
}
