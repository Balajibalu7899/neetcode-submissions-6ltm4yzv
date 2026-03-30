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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root,str='') {
        if(!root) return 'N';
        str = root.val + "," + this.serialize(root.left) + "," + this.serialize(root.right);
        return str;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let arr = data.split(",");
        return this.helper(arr);
    }
    helper(arr){
       let val = arr.shift();
       if(val ==="N") return null;
       let node = new TreeNode(Number(val));
       node.left = this.helper(arr);
       node.right = this.helper(arr);
       return node;
    }
}
