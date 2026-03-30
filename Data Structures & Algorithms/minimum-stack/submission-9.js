
class MinStack {
    constructor(value) {
     this.stack1 = new Array();
     this.stack2 = new Array();
     this.stack1.push(value);
     this.stack2.push(value);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
     if(this.stack1.length===0){
       this.stack1.push(val);
       this.stack2.push(val);
     }else{
       this.stack1.push(val);
       if(this.stack2[this.stack2.length-1]<val){
        this.stack2.push(this.stack2[this.stack2.length-1]);
       }else{
        this.stack2.push(val);
       }
     }
    }

    /**
     * @return {void}
     */
    pop() {
       this.stack1.pop();
       this.stack2.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack1[this.stack1.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack2[this.stack2.length-1];
    }
}
