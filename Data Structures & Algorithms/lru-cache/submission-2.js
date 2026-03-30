class Node{
    constructor(value,key){
        this.key = key;
         this.val = value;
        this.next = null;
        this.prev = null;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
        this.head = new Node(0,0);
        this.tail = new Node(0,0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    remove(node){
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }
    addTotail(node){
        let beforeTail = this.tail.prev;
        beforeTail.next=node;
        node.prev = beforeTail;
        node.next = this.tail;
        this.tail.prev = node;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)){
        let node = this.map.get(key);
        this.remove(node);
        this.addTotail(node);
        return node.val;
        }else{
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
           let node = this.map.get(key);
           node.val = value;
           this.remove(node);
           this.addTotail(node); 
        }else{
            if(this.capacity === this.map.size){
                let key = this.head.next.key;
                this.remove(this.head.next);
                this.map.delete(key);
            }
            let node = new Node(value,key);
             this.addTotail(node);
             this.map.set(key, node);
           return;
        }
    }
}
