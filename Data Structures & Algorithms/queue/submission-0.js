class Node{
   constructor(value){
    this.value=value;
    this.next = null;
    this.prev = null;
   }
}
class MyDeque {
    constructor(value ) {
     if(value===undefined){
        this.head = null;
        this.tail = null;
        this.length=0;
     }else{
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length=1;
     }
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.length === 0;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode; 
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.length <= 0) return -1;
        let temp = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return temp.value;
    }

    /**
     * @return {number}
     */
    popleft() {
        if(this.length <= 0) return -1;
        let temp = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return temp.value;
    }
}