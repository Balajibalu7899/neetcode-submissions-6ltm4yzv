/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
       if(!node){
        return node;
       }
        let hashmap = new Map();
        function dfs(node){
            if(hashmap.has(node)){
                return hashmap.get(node);
            }
            let newNode = new Node(node.val);
             hashmap.set(node, newNode);
            for(let neighborNode of node.neighbors){
                 newNode.neighbors.push(dfs(neighborNode));
            }
           
            return newNode;
        }
        return dfs(node);
    }
}
