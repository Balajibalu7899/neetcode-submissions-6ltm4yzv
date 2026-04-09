class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    reverse(str){
        let x = "";
        for(let i=str.length - 1;i>=0;i--){
         x+=str[i];
        }
        return x;
    }
    multiply(num1, num2) {
     if(num1 ==="0" || num2 ==="0") return "0"
     let result = Array(num1.length + num2.length).fill(0);
     let number1 = this.reverse(num1);
     let number2 = this.reverse(num2);
     for(let i=0;i<number1.length;i++){
        for(let j=0;j<number2.length;j++){
            let sum = result[i+j] + number1[i] * number2[j];
            result[i+j] = sum  % 10;
            result[i+j+1] += Math.floor(sum / 10)
        }
     }
     let res = result.reverse().join("");
     let i = 0;
     while(i < res.length && res[i]==="0"){
        i++;
     }
     return res.slice(i);
    }
}
