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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root){
            return [];
        }
        let queue = new Array();
        let arr =[];
        queue.push(root);
        let level = 0;
        while(queue.length!==0){
          let levelLength = queue.length;
          let sub =[];
          for(let i=0;i<levelLength;i++){
            let current = queue.shift();
            sub.push(current.val);
            if(current.left){
              queue.push(current.left);
            }
            if(current.right){  
              queue.push(current.right);
            }
          }
          level+=1;
          arr.push(sub);
        }
        return arr;
    }
}
