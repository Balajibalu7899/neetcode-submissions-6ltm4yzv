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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        let node = new TreeNode(val);
        if(!root){
            root = node;
            return root;
        }
        let temp = root;
        while(true){
            if(val < temp.val){
              if(temp.left){
                temp = temp.left;
              }else{
                temp.left = node;
                return root;
              }
            }else{
               if(temp.right){
                  temp = temp.right;
               }else{
                 temp.right = node;
                 return root;
               }
            }
        }

    }
}
