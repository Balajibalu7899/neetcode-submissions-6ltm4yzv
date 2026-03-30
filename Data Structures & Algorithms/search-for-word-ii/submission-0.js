class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this;
        for (const c of word) {
            if (!(c in cur.children)) {
                cur.children[c] = new TrieNode();
            }
            cur = cur.children[c];
        }
        cur.isWord = true;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    
    
    findWords(board, words) {
       const root = new TrieNode();
       for(let word of words){
        root.addWord(word);
       }
       let ROWS=board.length
       let COLUMNS=board[0].length;
       let res = new Set();
       let visited = new Set();
       function dfs(r,c,node,word){
         if(r<0||c<0||r>=ROWS||c>=COLUMNS||visited.has(`${r},${c}`)||!(board[r][c] in node.children)) return;
         visited.add(`${r},${c}`);
         node = node.children[board[r][c]];
         word+=board[r][c];
         if(node.isWord){
            res.add(word);
         }
         dfs(r+1,c,node,word);
         dfs(r-1,c,node,word);
         dfs(r, c+1,node,word);
         dfs(r,c-1,node,word);
         visited.delete(`${r},${c}`)
       }
       for(let i = 0; i< ROWS; i++){
         for(let j=0; j<COLUMNS; j++){
           dfs(i,j,root,"")
         }
       }
       return Array.from(res);
    }
   
   
}
