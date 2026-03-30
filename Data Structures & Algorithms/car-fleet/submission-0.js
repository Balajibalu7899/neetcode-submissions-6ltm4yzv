class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let hashset = [];
        for(let i=0;i<position.length;i++){
           hashset.push({"pos":position[i],"spd":speed[i]});
        }
        let sorted  = hashset.sort((a,b)=>b.pos - a.pos);
        console.log(sorted);
        let stack = [];
        for(let i=0;i<hashset.length;i++){
            console.log("Iteration:",i)
            let time = (target - hashset[i].pos) / hashset[i].spd;
            console.log("iteration",i,"time:",time);
            console.log("Condition",time,stack[stack.length -1],"if",time >= stack[stack.length - 1])
            if(stack[stack.length - 1] >= time){
                console.log("\n");
               continue;
            }else{
                stack.push(time);
            }
            console.log("stack now:",stack,"\n");
        }
        return stack.length;
    }
}
