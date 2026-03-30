class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let i=0;i<tokens.length;i++){
            console.log("Iteration",i,tokens[i]);
            if("+*-/".includes(tokens[i])){
              switch(tokens[i]){
                case "+": {
                    stack.push(stack.pop() + stack.pop());
                    break;
                } 
                case "-":{
                    let ope1 = stack.pop();
                    let ope2 = stack.pop();
                    stack.push(ope2 - ope1);
                    break;
                }
                case "*": {
                  stack.push(stack.pop() * stack.pop());
                  break;
                }
                case "/": {
                    let ope1 = stack.pop();
                    let ope2 = stack.pop()
                    stack.push(Math.trunc( ope2 / ope1));
                    break;
                }
              }
            }else{
                stack.push(parseInt(tokens[i]));
            }
        }
      return stack[stack.length-1];
    }
}
