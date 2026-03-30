class Node{
    constructor(key,val,left=null,right=null){
        this.key = key;
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
class TreeMap {
    constructor() {
        this.root = null;
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key, val) {
        let node = new Node(key,val);
        if(!this.root){
            this.root = node;
            return;
        }
        let cur = this.root;
        while(true){
            if(key < cur.key){
              if(cur.left!==null){
                 cur = cur.left;
              }else{
                cur.left = node;
                return;
              }
            }else if(key > cur.key){
               if(cur.right){
                cur = cur.right;
               }else{
                cur.right = node;
                return;
               }
            }else if(key === cur.key){
                cur.key = key;
                cur.val = val;
                return;
            }
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key,node=this.root) {
        if(!node){
            return -1;
        }
        if(node.key === key){
            return node.val;
        }else if(key < node.key){
            return this.get(key,node.left);
        }else if(key > node.key){
            return this.get(key,node.right);
        }
        return -1;
    }

    /**
     * @returns {number}
     */
    getMin() {
        if(!this.root){
            return -1;
        }
        let cur = this.root;
        while(cur.left){
            cur = cur.left;
        }
        return cur.val;
    }

    /**
     * @returns {number}
     */
    getMax() {
        if(!this.root){
            return -1;
        }
        let cur = this.root;
        while(cur.right){
            cur = cur.right;
        }
        return cur.val;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    removeHelper(key,root){
       if(!root){
         return null;
       }
       if(key < root.key){
         root.left = this.removeHelper(key, root.left);
       }else if(key > root.key){
        root.right = this.removeHelper(key, root.right);
       }else{
          if(!root.left) return root.right;
          if(!root.right) return root.left;
          let success = root.right;
          while(success.left){
             success = success.left;
          }
          root.val = success.val;
          root.key = success.key;
          root.right = this.removeHelper(root.key, root.right);
       }
       return root;
    }
    remove(key) {
       this.root = this.removeHelper(key, this.root);
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys(node=this.root,result=[]) {
           if(!node) return result;
           this.getInorderKeys(node.left,result);
           result.push(node.key);
           this.getInorderKeys(node.right,result);
        return result;
    }
}
