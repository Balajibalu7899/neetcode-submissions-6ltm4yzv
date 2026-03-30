class MyStack {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        if(x){
          this.q1.push(x);
        }
        console.log(this.q1)
    }

    /**
     * @return {number}
     */
    pop() {
        console.log(this.q1);
      while(this.q1.size()>1){
         let ele = this.q1.pop();
         this.q2.push(ele);
      }
      console.log(this.q1);
      let num = this.q1.pop();
      console.log("q1 length:",this.q1.size(),"topele",num);
      while(this.q2.size()>0){
        this.q1.push(this.q2.pop());
      }
      return num;
    }

    /**
     * @return {number}
     */
    top() {
         while(this.q1.size()>1){
         let ele = this.q1.pop();
         this.q2.push(ele);
      }
      let num = this.q1.pop();
      this.q2.push(num);
      while(this.q2.size()>0){
        this.q1.push(this.q2.pop());
      }
      return num;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.q1.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
