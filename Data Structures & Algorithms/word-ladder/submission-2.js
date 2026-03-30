class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if(!wordList.includes(endWord)){
            return 0;
        }
    wordList.push(beginWord);
    let neighbors = new Map();
    for(let word of wordList){
        for(let i=0; i<word.length;i++){
            let pattern = word.substring(0, i) + '*' + word.substring(i + 1);
            if(neighbors.has(pattern)){
                neighbors.get(pattern).push(word);
            }else{
                neighbors.set(pattern,[word]);
            }
        }
    }   
    let visited = new Set();
    visited.add(beginWord);
    let q = new Queue();
    q.enqueue(beginWord);
    let length = 1;
    while(q.size()){
        let len = q.size();
        for(let i=0; i<len; i++){
           let word = q.dequeue();
           if(word===endWord){
             return length;
           }
           for(let j=0; j<word.length; j++){
             let pattern = word.substring(0,j) + "*" + word.substring(j+1);
             for(let neighbor of neighbors.get(pattern)){
                 if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    q.push(neighbor);
                 }
             }
           }
        }
        length+=1;
    }  
    return 0;
 }
}
