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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
       const arr = [];
       this.dfs(root,arr);
       arr.sort((a,b)=>a-b)
       return arr[k-1];
    }
    dfs(root,arr){
        if(!root) return;
        this.dfs(root.left,arr);
        arr.push(root.val);
        this.dfs(root.right,arr);
    }
}
