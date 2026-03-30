class Node{
    constructor(value, min){
      this.value = value;
      this.next = null;
      this.min = min
    }
}
class MinStack {
    constructor(value) {
      if(value===undefined){
        this.head = null;
        this.length=0;
      }else{
        let newNode = new Node(value,value);
        this.head = newNode;
        this.length = 1;
      }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
     if(!this.head){
        this.head =  new Node(val,val);
     }else{
        if(this.head.min<=val){
            let newNode = new Node(val, this.head.min);
            newNode.next = this.head;
            this.head = newNode;
        }else{
            let newNode = new Node(val, val);
            newNode.next = this.head;
            this.head = newNode;
        }
        
     }
     this.length++;
    }

    /**
     * @return {void}
     */
    pop() {
        if(!this.head || this.length===0) return null;
        if(this.length===1){
            this.head = null;
            return;
        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        if(this.length===1){
            this.head = null;
        }
        this.length--;
    }

    /**
     * @return {number}
     */
    top() {
        return this.head.value;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.head.min;
    }
}
