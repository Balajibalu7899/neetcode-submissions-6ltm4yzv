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
    rightSideView(root) {
        if(!root){
            return [];
        }
        const q = new Queue();
        q.enqueue(root);
        let ar = [];
        let level = 0;
        while(q.size()>0){
            let levelLength = q.size();
            let sub = [];
            for(let i=0;i<levelLength;i++){
                let cur = q.dequeue();
                sub.push(cur.val);
                if(cur.left){
                    q.enqueue(cur.left);
                }
                if(cur.right){
                    q.enqueue(cur.right);
                }
            }
            ar.push(sub[sub.length-1]);
            level+=1;
        }
        return ar;
    }
}
