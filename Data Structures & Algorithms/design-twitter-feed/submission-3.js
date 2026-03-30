class Twitter {
    constructor() {
        //to store the userid's and their unique followeeId's in hashset
        this.followeeMap = new Map();
        //to store userId's and their tweets as a list of (count, tweetId) pair
        this.tweetMap = new Map();
        this.count = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void} */
    postTweet(userId, tweetId) {
       if(!this.tweetMap.has(userId)){
           this.tweetMap.set(userId, new Array());
       }
       this.tweetMap.get(userId).push([this.count, tweetId]);
       this.count+=1;
       return ;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
      let minheap = new MinPriorityQueue((item)=>item[0]);
      if(this.tweetMap.has(userId)){
         let tweets = this.tweetMap.get(userId);
         let i = tweets.length - 1;
         let c = 0;
         while(tweets[i]&&i>=0&&c<10){
            minheap.enqueue(tweets[i]);
            if(minheap.size() > 10){
              minheap.dequeue();
            }
            i--;
            c++;
         }
      }
      let fallowers = this.followeeMap.has(userId)?this.followeeMap.get(userId) : new Set();
      for(let followerId of fallowers){
          if(followerId === userId) continue;
          if(this.tweetMap.has(followerId)){
                let tweets = this.tweetMap.get(followerId);
                let i = tweets.length - 1;
                let c = 0;
                while(tweets[i]&&i>=0&&c<10){
                   minheap.enqueue(tweets[i]);
                   if(minheap.size() > 10){
                     minheap.dequeue();
                   }
                   c++;
                   i--;
                }
          }
      }
      let res = [];
      while(minheap.size()>0){
         res.push(minheap.dequeue());
      }
      return res.map((ele)=>ele[1]).reverse();
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(!this.followeeMap.has(followerId)){
           this.followeeMap.set(followerId, new Set());
        }
        this.followeeMap.get(followerId).add(followeeId);
        return;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(!this.followeeMap.has(followerId)){
        }else{
          this.followeeMap.get(followerId).delete(followeeId);
        }
        return ;
    }
    
}