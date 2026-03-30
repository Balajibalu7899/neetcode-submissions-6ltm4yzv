class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}



class LinkedList {
    constructor(value) {
      if(value!==undefined){
       const newNode = new Node(value);
       this.head = newNode;
       this.tail = newNode;
       this.length = 1;
      }else{
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(index<0 || index>=this.length) return -1;
        if(index===0) return this.head.value;
        let temp = this.head;
        for(let i=0;i<index;i++){
           temp = temp.next;
        }
        return temp.value;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let node = new Node(val);
        if(!this.head){
          this.head = node;
          this.tail = this.head;
        } else {
          node.next = this.head;
          this.head = node;
        }
        this.length++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if(index<0 ||index >= this.length) return false;
        if(index === 0) {
            this.head = this.head.next;
            if (this.length === 1) this.tail = null;
        } else {
            let current = this.head;
            let previous;
            for(let i=0;i<index;i++){
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            if (index === this.length - 1) this.tail = previous;
        }
        this.length--;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let numbers = [];
        let temp = this.head;
       while(temp){
         numbers.push(temp.value);
         temp=temp.next;
       }
       return numbers;
    }
}