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
        let level = 0;
        const q = new Queue();
        let mainLst = [];
        q.enqueue(root);
        while(q.size()>0){
          let subLst = [];
          let length = q.size();
          for(let i=0;i<length;i++){
            let cur = q.dequeue();
            subLst.push(cur.val);
            if(cur.left){ q.enqueue(cur.left)}
            if(cur.right){ q.enqueue(cur.right)}
          }
          level+=1;
          mainLst.push(subLst);
        }
        return mainLst;
    }
}
